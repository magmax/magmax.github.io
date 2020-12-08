# Celery full example: multiply two numbers with partials
from celery import Celery

# RabbitMQ
#app = Celery('tasks', broker='amqp://guest@localhost//', backend='amqp')
# Redis
app = Celery('tasks', broker='redis://localhost:6379/0', backend='redis://localhost:6379/0')

@app.task
def multiply(a, b):
    return a * b

def main():
    duplicate = multiply.si(2)
    promise = duplicate.delay(5)
    print(promise.get())

if __name__ == '__main__':
    main()
