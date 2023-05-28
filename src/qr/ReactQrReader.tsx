import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const ReactQrReader = () => {
    const [result, setResult] = useState('');

    const handleScan = (data: any) => {
        try {
            if (data) {
                setResult(data.getText());
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="m-auto mt-5 max-w-screen-md">
            <div className="m-auto text-center text-xl mb-2">react-qr-reader</div>
            <QrReader
                constraints={{ facingMode: 'environment' }}
                scanDelay={300}
                onResult={handleScan}
                className="m-auto px-2 w-full sm:w-1/2"
            />
            <div className="px-2 text-center">
                <div>【読取結果】</div>
                <div className="m-auto px-2 w-full sm:w-1/2 border rounded h-20 bg-gray-100 overflow-scroll">
                    {result}
                </div>
            </div>
        </div>
    );
};

export default ReactQrReader;
