# Celery client example: request for two numbers multiplication
from celery import Celery

# RabbitMQ
#app = Celery('tasks', broker='amqp://guest@localhost//', backend='amqp')
# Redis
app = Celery('tasks', broker='redis://localhost:6379/0', backend='redis://localhost:6379/0')

promise = app.send_task('tasks.multiply', args=[2, 2])

print(promise.get())
