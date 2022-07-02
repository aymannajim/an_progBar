# an_progBar

## How to use:
**`exports['an_progBar']:run(TIME,TEXT,OPTIONAL_COLOR)`**
> `TIME`: [Number] Time in seconds
> 
> `TEXT`: [String] Text shown in the progress bar
> 
> `OPTIONAL_COLOR`: [String] Color in HEX format - This is 100% OPTIONAL, not using this argument will make the progress bar use the Config.defaultColor set on the config file.

## Example Code:
```lua
-- code before the progress bar
exports['an_progBar']:run(10,'Lockpicking','#E14127')
Citizen.Wait(10000)
-- code after the progress bar
```



>>> 
                             PLEASE NOTE:
    YOU NEED TO DO A CITIZEN.WAIT(TIME) WITH THE SAME TIME SPECIFIED
                AFTER EXECUTING THE PROGRESS BAR FUNCTION
       TO MAKE THE SCRIPT UNABLE TO RUN UNTIL THE BAR FINISHES UP
