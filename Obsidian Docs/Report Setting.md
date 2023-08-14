A report from the device containing data from the device's [[Settings Registry]]. This can be sent as a response to a [[Write Setting]] message, or the [[Fetch Setting]] message.

| Property | Value |
| -------- | ----- |
| API Class | `000000` |
| API Index | `0002` |
| Data Length | 5 Byte |
| TX Direction | Device -> Robot |

| Data | Start Bit | Data Length | Description |
| ---- | --------- | ------- | ----------- |
| `Setting Index` | 0 | 1 Byte | The index of the setting. |
| `Data` | 8 | 4 Bytes | The data stored at this index. If the data size of the setting is smaller than this field, then the least significant bits are used. |
