### React で行う QR 読取

-   [react-qr-reader](https://www.npmjs.com/package/react-qr-reader)

    ```
    npm i react-qr-reader
    ```

    react-qr-reader は React 用に特化した QR コードリーダーコンポーネントで、簡単に実装可能。
    内部的には jsQR を使用しており、ウェブカメラを介してリアルタイムで QR コードをスキャンする機能がある。
    React18 以降には正式に対応していない。（20230528 現在）

<br>

-   [jsQR](https://www.npmjs.com/package/jsqr)

    ```
    npm i jsqr
    ```

    JavaScript 製の QR コード読み取りライブラリ。
    ブラウザや Node.js で使用することが可能で、非常に簡単に QR コードの読み取りを行うことができる。

<br>

-   [qrcode-reader](https://www.npmjs.com/package/qrcode-reader)

    ```
    npm i qrcode-reader
    ```

    Node.js で QR コード 読取するための一般的なライブラリ。
    jsQR と比較すると少々複雑だが、高精度な読み取りが可能。

<br>

-   [node-quirc](https://www.npmjs.com/package/node-quirc)
    ```
    npm i node-quirc
    ```
    node-quirc は C++ベースのライブラリで、Node.js のネイティブアドオンとして提供されている。
    他のライブラリと比較して高速で、高精度な読み取りが可能。
