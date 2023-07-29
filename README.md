### React で行う QR 読取

-   [react-qr-reader](https://www.npmjs.com/package/react-qr-reader)

    ```
    npm i react-qr-reader
    ```

    react-qr-reader は React 用に特化した QR コードリーダーコンポーネントで、簡単に実装可能。  
    内部的には jsQR を使用しており、ウェブカメラを介してリアルタイムで QR コードをスキャンする機能がある。  
    React18 以降には正式に対応していない。（2023/05/28 現在）

<br>

-   [jsQR](https://www.npmjs.com/package/jsqr)

    ```
    npm i jsqr
    ```

    JavaScript 製の QR コード読み取りライブラリ。  
    ブラウザや Node.js で使用することが可能で、非常に簡単に QR コードの読み取りを行うことができる。

<br>

-   [zxing/browser](https://www.npmjs.com/package/@zxing/browser)
-   [zxing/library](https://www.npmjs.com/package/@zxing/library)
    ```
    npm i @zxing/browser
    npm i @zxing/library --save`
    ```
    「@zxing/browser」と「zxing/library」は、ZXing（ゼブラ・クロッシング）と呼ばれるオープンソースのバーコード処理ライブラリの一部。
    -   @zxing/browser  
        ZXing ライブラリをブラウザ環境で使用するための特定の実装。ZXing は Java で書かれており、通常はネイティブな Java アプリケーションで使用されるが、@zxing/browser は JavaScript で書かれており、ブラウザ上で ZXing の機能を利用するためのインタフェースを提供する。
    -   zxing/library  
        「zxing/library」は、ZXing のコアライブラリであり、バーコードのエンコードやデコードなどの基本的な機能を提供する。このライブラリは Java で書かれており、Java アプリケーションで使用することが可能。

<br>

---

### QR 読取精度を向上させるためにできること

-   MediaDevices: getUserMedia()メソッドの引数 constraints を使用して解像度の設定を変更する
    -   [MediaDevices: getUserMedia() メソッド](https://developer.mozilla.org/ja/docs/Web/API/MediaDevices/getUserMedia)
-   jsQR ライブラリの場合、キャンバスに描画する色を調整する

    -   [Canvas チュートリアル](https://developer.mozilla.org/ja/docs/Web/API/Canvas_API/Tutorial)
    -   [[HTML5] Canvas の表示内容にフィルターをかける（グレースケース、ネガポジ反転）](https://www.yoheim.net/blog.php?q=20120907)

-   jsQR ライブラリの場合、QR 読取処理のインターバルを長めに設定する（画像処理の時間に余裕をもたせる）
    ```
    const intervalId = setInterval(scanQR, 1000); // ミリ秒単位を調整
    ```
