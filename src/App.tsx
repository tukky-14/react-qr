import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './components/Header';
import NodeQuirc from './qr/NodeQuirc';
import QrcodeReader from './qr/QrcodeReader';
import ReactQrReader from './qr/ReactQrReader';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="react-qr-reader" element={<ReactQrReader />} />
                <Route path="qrcode-reader" element={<QrcodeReader />} />
                <Route path="node-quirc" element={<NodeQuirc />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
