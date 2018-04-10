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

署名サーバは sign フォルダ内にあります。Heroku などにデプロイして使ってください。

config.example.json を config.json にリネームした上で、クライアントキーを指定してください。

```json
{
  "clientKey": "YOUR_CLIENT_KEY"
}
```

後は npm run start で実行できます。デプロイ先はHerokuなど自由に選んでください。

## License

MIT.
