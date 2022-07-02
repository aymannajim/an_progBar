Config = {}

-- Choose your notification system
Config.useMythic = false -- Enable if you're using Mythic_Notify
Config.useESX = false -- Enable if you're using ESX notification
Config.useQB = false -- Enable if you're using QBCore notification

-- Choose your default color
Config.defaultColor = "#E92B53" -- This will be used by default if you don't specify a color when triggering the progress bar

-- Testing the progress bar
Config.testCommands = true -- this will allow the commands: 'testpg', 'testpg2' and 'testpg3'

-- USAGE: exports['an_progBar']:run(TIME,TEXT,OPTIONAL_COLOR)
-- OPTIONAL_COLOR is 100% OPTIONAL, not using that argument will make the progress bar use the Config.defaultColor
-- EXAMPLE: exports['an_progBar']:run(10,'Lockpicking','#E14127')


--[[ 
                            PLEASE NOTE:
    YOU NEED TO DO A CITIZEN.WAIT(TIME) WITH THE SAME TIME SPECIFIED
                AFTER EXECUTING THE PROGRESS BAR FUNCTION
       TO MAKE THE SCRIPT UNABLE TO RUN UNTIL THE BAR FINISHES UP
]]
