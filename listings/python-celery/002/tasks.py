# Celery full example: publisher/subscriber to request a multiplication
from celery import Celery

# RabbitMQ
#app = Celery('tasks', broker='amqp://guest@localhost//', backend='amqp')
# Redis
app = Celery('tasks', broker='redis://localhost:6379/0', backend='redis://localhost:6379/0')

@app.task
def multiply(a, b):
    return a * b

def main():
    promise = multiply.delay(4, 5)
    print(promise.get())

if __name__ == '__main__':
    main()
