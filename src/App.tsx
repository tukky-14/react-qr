import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './components/Header';
import JSQR from './qr/JSQR';
import QrcodeReader from './qr/QrcodeReader';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="jsQR" element={<JSQR />} />
                <Route path="qrcode-reader" element={<QrcodeReader />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
