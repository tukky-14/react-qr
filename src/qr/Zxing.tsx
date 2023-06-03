import { BrowserMultiFormatReader } from '@zxing/library';
import { useRef, useEffect, useState } from 'react';

const Zxing = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [resultText, setResultText] = useState('');
    const [codeReader, setCodeReader] = useState<BrowserMultiFormatReader | null>(null);
    const [cameraFacingMode, setCameraFacingMode] = useState('environment');

    useEffect(() => {
        if (!codeReader) {
            setCodeReader(new BrowserMultiFormatReader());
        }

        navigator.mediaDevices
            .getUserMedia({
                video: {
                    width: 480,
                    height: 600,
                    facingMode: cameraFacingMode,
                },
            })
            .then((stream) => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
                if (codeReader) {
                    codeReader.decodeFromVideoDevice(null, videoRef.current, (result, err) => {
                        if (result) {
                            alert(result.getText());
                            setResultText(result.getText());
                        }
                        // if (err) {
                        //     alert('error');
                        // }
                    });
                }
            })
            .catch((err) => console.error(err));

        // cleanup function
        return () => {
            if (codeReader) {
                codeReader.reset();
            }
        };
    }, [cameraFacingMode, codeReader]);

    const switchCameraFacingMode = () => {
        setCameraFacingMode((prevMode) => (prevMode === 'environment' ? 'user' : 'environment'));
    };

    return (
        <div className="mt-5">
            <div className="m-auto mb-2 text-center text-xl font-bold">zxing</div>
            <div className="px-2">
                <video className="m-auto" ref={videoRef} />
            </div>
            <div className="px-2 text-center">
                <div>【読取結果】</div>
                <div className="m-auto px-2 w-full sm:w-1/2 border rounded h-20 bg-gray-100 overflow-scroll">
                    {resultText}
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

export default Zxing;
