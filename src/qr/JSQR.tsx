import jsQR from 'jsqr';
import { useRef, useEffect, useState } from 'react';

const JSQR = () => {
    const [scanResult, setScanResult] = useState('');
    const [cameraFacingMode, setCameraFacingMode] = useState('environment');
    const videoRef = useRef<any>();
    const canvasRef = useRef<any>();

    useEffect(() => {
        navigator.mediaDevices
            .getUserMedia({
                video: {
                    facingMode: cameraFacingMode,
                    width: { ideal: 480 },
                    height: { ideal: 600 },
                },
            })
            .then((stream) => {
                videoRef.current.srcObject = stream;
                videoRef.current.play().catch((error: any) => console.log());
                const intervalId = setInterval(scanQR, 1000);
                return () => clearInterval(intervalId);
            })
            .catch((error) => {
                alert(error);
            });
    }, [cameraFacingMode]);

    const scanQR = () => {
        const video: any = videoRef.current;
        const canvas: any = canvasRef.current;

        // Check if the canvas or video is still mounted
        if (!canvas || !video) {
            return;
        }

        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        // const scale = 1.2;
        // context.drawImage(video, 0, 0, canvas.width * scale, canvas.height * scale);
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

        // rgbの値を計算して白黒を反転
        // let data = imageData.data;
        // for (let i = 0; i < data.length; i += 4) {
        //     data[i] = 255 - data[i];
        //     data[i + 1] = 255 - data[i + 1];
        //     data[i + 2] = 255 - data[i + 2];
        // }

        context.putImageData(imageData, 0, 0);

        const qrCode = jsQR(imageData.data, imageData.width, imageData.height);
        if (qrCode) {
            alert(qrCode.data);
            setScanResult(qrCode.data);
        }
    };

    const switchCameraFacingMode = () => {
        setCameraFacingMode((prevMode) => (prevMode === 'environment' ? 'user' : 'environment'));
    };

    return (
        <div className="mt-5">
            <div className="m-auto mb-2 text-center text-xl font-bold">jsQR</div>
            <div className="px-2 flex">
                <video className="m-auto -scale-x-100" ref={videoRef} playsInline />
                <canvas ref={canvasRef} style={{ display: 'none' }} />
                {/* <canvas className="m-auto w-[480px] h-[600px] -scale-x-100" ref={canvasRef} /> */}
            </div>
            <div className="px-2 text-center">
                <div>【読取結果】</div>
                <div className="m-auto px-2 w-full sm:w-1/2 border rounded h-20 bg-gray-100 overflow-scroll">
                    {scanResult}
                </div>
            </div>
            <button
                className="block m-auto mt-2 px-2 py-1 border rounded text-white bg-blue-600 hover:opacity-80"
                onClick={switchCameraFacingMode}
            >
                カメラ切替
            </button>
        </div>
    );
};

export default JSQR;
