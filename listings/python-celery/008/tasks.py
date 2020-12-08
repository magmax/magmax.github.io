# Celery beat example: periodic date operation
import datetime
from celery import Celery
from celery import group

# RabbitMQ
#app = Celery('tasks', broker='amqp://guest@localhost//', backend='amqp')
# Redis
app = Celery('tasks', broker='redis://localhost:6379/0', backend='redis://localhost:6379/0')

@app.task
def add_days(days):
    return datetime.datetime.now() + datetime.timedelta(days=days)

app.conf.update(
    CELERYBEAT_SCHEDULE={
        'multiply-each-10-seconds': {
            'task': 'tasks.add_days',
            'schedule': datetime.timedelta(seconds=10),
            'args': (2, )
        },
    },
    CELERY_ACCEPT_CONTENT = ['json'],
)
