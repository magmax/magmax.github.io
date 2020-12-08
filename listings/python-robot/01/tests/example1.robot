*** Settings ***
Library    Process

*** Test Cases ***
Fibo of 1 is 1
    ${result} =       Run Process         ./fibonacci.py     1
    Should Be Equal   ${result.stdout}    1
    Should Be Equal As Integers      ${result.rc}   0
