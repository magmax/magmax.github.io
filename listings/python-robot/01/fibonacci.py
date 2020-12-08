#!/usr/bin/env python
import sys

def fibo(n):
    return fibo(n-1) + fibo(n-2) if n > 2 else 1

def main():
    print(fibo(int(sys.argv[1])))

if __name__ == '__main__':
    main()
