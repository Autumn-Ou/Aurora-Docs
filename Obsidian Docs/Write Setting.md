Writes a value to a writeable setting in the device's [[Settings Registry]]. The device will respond with a [[Report Setting]] afterwards.

| Property | Value |
| -------- | ----- |
| API Class | `000000` |
| API Index | `0001` |
| Data Length | 5 Byte |
| TX Direction | Robot -> Device |

| Data | Start Bit | Data Length | Description |
| ---- | --------- | ------- | ----------- |
| `Setting Index` | 0 | 1 Byte | The index of the setting to write to. Valid indexes are listed in the [[Settings Registry]]. |
| `Data` | 8 | 4 Bytes | The data to write, if the data size of the setting is smaller than this field, then the least significant bits are used. |
