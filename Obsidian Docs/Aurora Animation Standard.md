The animations used on Aurora are written in JSON, so that it's easily manipulated by both software and humans.

A complete JSON example is shown below:
```json
{
	"Title": "Blink Example",
	"ID": 0,
	"Framerate": 1,
	"Num LEDs": 3,
	"Num Frames": 3,
	"Data": [
		[0, 0, 16777215],
		[16777215, 0, 0],
		[0, 16777215, 0]
	]
}
```

As you can see from the example the JSON has the following fields:
* `Title` - String - The human readable name of the animation
* `ID` - Number (integer) - The ID number used to select the animation to play, it is the end-user's job to ensure multiple animations do not have the same ID, otherwise a fault will be raised
* `Framerate` - Number (integer) - The framerate in `frames per second` to display the animation at, be weary of the technical limitation between the length of LEDs and the speed of the data.
* `Num LEDs` - Number (integer) - The number of LEDs in the animation
* `Num Frames` - Number (integer) - The number of frames in the animation
* `Data` - Array - An array of frames comprising the animation, must be of size `Num Frames`
	* Array - An array of data comprising a frame, must be of size `Num LEDs`, data is an array of numbers ranging from `[0, 16777215]`/`[0x000000, 0xFFFFFF]` which control the brightness of each LED in RGB.