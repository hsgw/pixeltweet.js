# pixeltweet.js
[pixeltweet]から書きだしたデータをcanvas上に描画するライブラリです。
ライセンスはMITです。

## pixeltweet
[pixeltweet]は、m7kenji氏とHANDSUM.incが開発したスマートフォン向けドット絵エディタです。

http://pixeltweet.hand-sum.com/

## デモページ

## 必要なもの
* このリポジトリの`lib/pixeltweet.js`
[ZIPファイルでダウンロード]()
* 適当なバージョンのjquery(2.1.3で開発しました)
* pixeltweetの文字列データ


## 使い方

* 必要なスクリプトを読み込む
```javascript
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="../libs/pixeltweet.js"></script>
```

* こんな感じでデータを指定して描画
```javascript
$(".pixeltweet").setPtData("pixeltweetのデータ");
$(".pixeltweet").drawPt();
～
<div class="pixeltweet"></div>
```
もしくはタグ側にデータを持たせて
```javascript
$(".pixeltweet").drawPt();
～
<div class="pixeltweet" data-pt="pixeltweetのデータ"></div>
```

* 描画したデータはタグ側に`string`として保存されています
```javascript
var dataString = $(".pixeltweet").getPtData();
```

詳しくはコードとexampleを見て下さい

[pixeltweet]: http://pixeltweet.hand-sum.com/