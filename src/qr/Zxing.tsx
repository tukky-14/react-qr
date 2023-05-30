import { BrowserMultiFormatReader } from '@zxing/library';
import { useRef, useEffect, useState } from 'react';

const Zxing = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [resultText, setResultText] = useState('');
    const codeReader = new BrowserMultiFormatReader();

    useEffect(() => {
        navigator.mediaDevices
            .enumerateDevices()
            .then((devices) => {
                const videoInputDevices = devices.filter((device) => device.kind === 'videoinput');
                const rearCamera = videoInputDevices.find((device) =>
                    device.label.includes('rear')
                );
                const sourceId = rearCamera ? rearCamera.deviceId : videoInputDevices[0].deviceId;
                codeReader.decodeFromVideoDevice(sourceId, videoRef.current, (result, err) => {
                    if (result) {
                        console.log(result);
                        setResultText(result.getText());
                        // setResultText(result.text);
                    }
                    if (err) {
                        // console.error(err);
                        // alert('error');
                    }
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
            <div className="m-auto text-center text-xl">zxing</div>
            <div className="px-2">
                <video
                    className="m-auto"
                    ref={videoRef}
                    style={{ width: '480px', height: '600px' }}
                />
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
