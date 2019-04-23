剪切板操作。 Clipboard实例由Delphi在单元initialization和finalization时自动构造和析构。

常用的几个方法：

| 方法 | 说明 | 例 |
| ---- | ---- | ---- |
| AsText | 获取剪切板文字 | ``` fmt.Println(vcl.Clipboard.AsText()) ``` |
| SetAsText | 设置剪切板文字 | ``` vcl.Clipboard.SetAsText("1111") ``` |
| Clear |  清空剪切板 | ``` vcl.Clipboard.Clear() ``` |
| Open |   打开剪切板 | ``` vcl.Clipboard.Open() ``` |
| Close | 关闭剪切板 | ``` vcl.Clipboard.Close() ``` |
