let strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
makerbit.connectUltrasonicDistanceSensor(DigitalPin.P5, DigitalPin.P8)
basic.forever(function () {
    while (makerbit.getUltrasonicDistance(DistanceUnit.CM) < 7) {
        music.playMelody("C C D D C C D D ", 300)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
