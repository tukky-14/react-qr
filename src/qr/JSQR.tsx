import jsQR from 'jsqr';
import { useRef, useEffect, useState } from 'react';

const JSQR = () => {
    const [scanResult, setScanResult] = useState('');
    const videoRef = useRef<any>();
    const canvasRef = useRef<any>();

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
            videoRef.current.srcObject = stream;
            videoRef.current.play().catch((error: any) => console.log());
            const intervalId = setInterval(scanQR, 500); // Every second
            return () => clearInterval(intervalId); // Clear interval on unmount
        });
    }, []);

    const scanQR = () => {
        const video: any = videoRef.current;
        const canvas: any = canvasRef.current;

        // Check if the canvas or video is still mounted
        if (!canvas || !video) {
            return;
        }

        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const qrCode = jsQR(imageData.data, imageData.width, imageData.height);
        if (qrCode) {
            setScanResult(qrCode.data);
        }
    };

    return (
        <div className="mt-5">
            <div className="m-auto text-center text-xl">jsQR</div>
            <div className="px-2">
                <video ref={videoRef} />
                <canvas ref={canvasRef} style={{ display: 'none' }} />
            </div>
            <div className="px-2 text-center">
                <div>【読取結果】</div>
                <div className="m-auto px-2 w-full sm:w-1/2 border rounded h-20 bg-gray-100 overflow-scroll">
                    {scanResult}
                </div>
            </div>
        </div>
    );
};

export default JSQR;
