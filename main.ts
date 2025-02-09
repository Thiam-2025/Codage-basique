input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.North)
    music.play(music.stringPlayable("C5 E B G C5 F A C ", 290), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.South)
    music.play(music.createSoundExpression(WaveShape.Square, 1861, 1, 255, 0, 1559, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
})
basic.showString("Hello!")
basic.showIcon(IconNames.Yes)
