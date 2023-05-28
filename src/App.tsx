import { Button } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './components/Header';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
