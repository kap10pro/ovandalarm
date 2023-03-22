strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)

def on_forever():
    while sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.CENTIMETERS) < 7:
        music.play_melody("C C D D C C D D ", 300)
        strip.show_color(neopixel.colors(NeoPixelColors.RED))
basic.forever(on_forever)
