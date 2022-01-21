basic.showIcon(IconNames.Duck)
radio.setGroup(10)

// routes all radio messages via radio
midi.setTransport(function (data: Buffer) {
    led.toggle(3, 4)
    radio.sendBuffer(data);
})

// proxies all radio buffers to serial
radio.onReceivedBuffer(function (buffer: Buffer) {
    serial.writeBuffer(buffer);
    led.toggle(4, 4);
})

// test send message
input.onButtonPressed(Button.A, function () {
    led.toggle(0, 0)
    midi.playTone(Note.C, 500)
})
