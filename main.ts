/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Joshua
 * Created on: Feb 2026
 * This program wil say what the temperature is
*/

let temperature: number

//reset
basic.clearScreen()
basic.showIcon(IconNames.Sad)

// Temperature will show when A button is pressed
input.onButtonPressed(Button.A, function () {
    temperature = input.temperature()
    basic.showString("The temperature is")
    basic.showNumber(temperature)
    pause(1000)
    basic.clearScreen()
    basic.showIcon(IconNames.Sad)
})