import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './components/Header';
import JSQR from './qr/JSQR';
import Zxing from './qr/Zxing';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/react-qr" element={<Home />} />
                <Route path="/react-qr/jsQR" element={<JSQR />} />
                <Route path="/react-qr/zxing" element={<Zxing />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
