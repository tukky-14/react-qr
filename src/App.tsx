import { Button } from '@mui/material';
import './App.css';
import Header from './components/Header';

function App() {
    return (
        <div>
            <Header />
            <div className="m-auto w-full sm:w-1/2 xl:w-1/3 flex flex-col gap-4 mt-10 px-4">
                <Button sx={{ textTransform: 'none' }} variant="contained">
                    jsQR
                </Button>
                <Button sx={{ textTransform: 'none' }} variant="contained">
                    qrcode-reader
                </Button>
                <Button sx={{ textTransform: 'none' }} variant="contained">
                    node-quirc
                </Button>
            </div>
        </div>
    );
}

export default App;
