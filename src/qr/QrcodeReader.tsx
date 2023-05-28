import { useRef, useEffect, useState, useCallback } from 'react';
import Webcam from 'react-webcam';

const QrcodeReader = () => {
    const videoConstraints = {
        width: 720,
        height: 720,
        facingMode: 'environment',
    };

    const [imageSrc, setImageSrc] = useState('');
    const webcamRef = useRef<any>(null);

    useEffect(() => {
        // const interval = setInterval(() => {
        //     const imageData = webcamRef.current?.getScreenshot() || '';
        //     const imageSrc = imageData.split(',')[1];
        //     setImageSrc(imageSrc);
        // }, 500);
    }, []);

    return (
        <div className="mt-5">
            <div className="m-auto text-center text-xl">qrcode-reader</div>
            <div className="px-2">
                <Webcam
                    className="m-auto"
                    audio={false}
                    width={720}
                    height={720}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                />
            </div>
            <div className="px-2 text-center">
                <div>【読取結果】</div>
                <div className="m-auto px-2 w-full sm:w-1/2 border rounded h-20 bg-gray-100 overflow-scroll">
                    {imageSrc}
                </div>
            </div>
        </div>
    );
};

export default QrcodeReader;
