# Celery example: several multiplications with chains and groups (canvas)
from celery import Celery

# RabbitMQ
#app = Celery('tasks', broker='amqp://guest@localhost//', backend='amqp')
# Redis
app = Celery('tasks', broker='redis://localhost:6379/0', backend='redis://localhost:6379/0')

@app.task
def multiply(a, b):
    return a * b

from celery import group

def main():
    duplicate = multiply.s(2)

    task = group(
        multiply.s(4, 5) | multiply.s(2),
        multiply.s(9, 2) | multiply.s(4),
        multiply.s(9, 7) | duplicate,
    )
    promise = task.delay()
    print(promise.get())

if __name__ == '__main__':
    main()
