# NCMBサーバ ver.2

NCMBの署名処理をサーバサイドで行います。

## 使い方

通常のJavaScript SDKと初期化方法が若干異なります。

```javascript
var SIGNATURE_SERVER = 'http://localhost:3000/sign';
var applicationKey = 'YOUR_APPLICATION_KEY';
var clientKey = 'dummy';
var ncmb = new NCMB(applicationKey, clientKey)
```

SIGNATURE_SERVERという変数が定義されていれば、指定されたURLへPOSTリクエストを行います。クライアントキーは適当なものを指定してください（エラー回避のためで、プログラム中では使われません）。

### 署名サーバ

署名サーバは [NCMBMania/sign_server_v2](https://github.com/NCMBMania/sign_server_v2) あります。Heroku などにデプロイして使ってください。

[NCMBMania/sign_server_v2](https://github.com/NCMBMania/sign_server_v2)

## License

MIT.
