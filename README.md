# an_progBar
![image](https://user-images.githubusercontent.com/36258300/177007964-d6fea7d4-7705-4f2a-811d-5d723bbe9385.png)

[![Join my Discord](https://img.shields.io/discord/1100609827715166258?color=5865f2&label=Discord&logo=https%3A%2F%2Fi.imgur.com%2Ftt5au4m.png&style=for-the-badge)](https://discord.gg/KxdPzC5EeJ)

## PREVIEW:
![image](https://user-images.githubusercontent.com/36258300/177007983-c46b1d05-94cb-4b91-957b-0d8e3b3c9960.png)
![image](https://user-images.githubusercontent.com/36258300/177007993-11cfae1b-5ccc-43f7-a234-678b9b902af8.png)

## VIDEO:
https://www.youtube.com/watch?v=TFv9voVMuRc

## How to use:
**`exports['an_progBar']:run(TIME,TEXT,OPTIONAL_COLOR)`**
> `TIME`: [Number] Time in seconds
> 
> `TEXT`: [String] Text shown in the progress bar
> 
> `OPTIONAL_COLOR`: [String] Color in HEX format - This is 100% OPTIONAL, not using this argument will make the progress bar use the Config.defaultColor set on the config file.

**`exports['an_progBar']:stop()`**
> This will stop the progress bar

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
