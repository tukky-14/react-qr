import { BrowserMultiFormatReader } from '@zxing/library';
import { useRef, useEffect, useState } from 'react';

const Zxing = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [resultText, setResultText] = useState('');
    const codeReader = new BrowserMultiFormatReader();

    useEffect(() => {
        navigator.mediaDevices
            .getUserMedia({ video: { width: 480, height: 600 } })
            .then((stream) => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
                codeReader.decodeFromVideoDevice(null, videoRef.current, (result, err) => {
                    if (result) {
                        console.log(result);
                        setResultText(result.getText());
                    }
                    // if (err) {
                    // alert('error');
                    // }
                });
            })
            .catch((err) => console.error(err));

        // cleanup function
        return () => {
            codeReader.reset();
        };
    }, []);

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
        </div>
    );
};

export default Zxing;
