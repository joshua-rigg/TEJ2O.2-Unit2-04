/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Joshua
 * Created on: Feb 2026
 * This program will say what the temperature is
*/

let temperature: number

//reset
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Temperature will show when A button is pressed
input.onButtonPressed(Button.A, function () {
    temperature = input.temperature()
    basic.showString("The temperature is: " + temperature + " C")
    pause(1000)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
