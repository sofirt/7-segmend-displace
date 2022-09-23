input.onButtonPressed(Button.A, function () {
    test_ON()
})
input.onButtonPressed(Button.B, function () {
    Test_OFF()
})
function Test_OFF () {
    pins.digitalWritePin(DigitalPin.P1, 1)
}
function test_ON () {
    pins.digitalWritePin(DigitalPin.P1, 0)
}
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
