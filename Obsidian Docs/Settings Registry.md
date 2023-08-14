Aurora uses an internal settings registry to decide how to operate.
The following table describes the address, size, and how each setting causes the device to operate:

| Setting Name | Registry Index | Data Size | Default Value | Value Range | Mutability | Notes |
| ------------ | ----------------- | ------------- | ------------- | ----------- | ---------- | ----- |
| CAN ID | 0 | 1 Byte | 0 | [0,63] | Read / Write | Only the last 6 bits are used |
| Firmware Version | 1 | 4 Bytes | N/A | N/A | Read Only | Byte 0-1: Year, Byte 2: Rev, Byte 3: Patch |
| Status Frame Period | 2 | 2 Bytes | `1,000` | [0, 65535] | Read / Write | The time in milliseconds between the periodic status frame. | 
| Power Output | 3 | 1 Byte | 0x00 | [0,31] | Read / Write | Last 5 bits used; 1s bit controls port 1, 2s bit controls port 2, 4s bit controls port 3, etc. a 1 in a bit means the power for that port is enabled. |
