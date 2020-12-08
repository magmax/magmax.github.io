| *Setting* | *Value* |
| Library   | Process |


| *Test Case*    | *Action*                    | *Argument*        |
| Fibo of 2 is 1 | ${result} =                 | Run Process       | ./fibonacci.py | 2
|                | Should Be Equal             | ${result.stdout}  | 1
|                | Should Be Equal As Integers | ${result.rc}      | 0
