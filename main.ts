let temp = 0
OLED.init(128, 64)
basic.forever(function () {
    temp = smarthome.ReadTemperature(TMP36Type.TMP36_temperature_C, AnalogPin.P1)
    OLED.clear()
    OLED.writeString("temperatur")
    OLED.writeNum(temp)
    OLED.writeString("abdullah")
    if (temp > 25) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
