import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="m-auto w-full sm:w-1/2 xl:w-1/3 flex flex-col gap-4 mt-10 px-4">
            <Link to="/react-qr-reader">
                <Button fullWidth sx={{ textTransform: 'none' }} variant="contained">
                    react-qr-reader
                </Button>
            </Link>
            <Link to="/qrcode-reader">
                <Button fullWidth sx={{ textTransform: 'none' }} variant="contained">
                    qrcode-reader
                </Button>
            </Link>
            <Link to="/node-quirc">
                <Button fullWidth sx={{ textTransform: 'none' }} variant="contained">
                    node-quirc
                </Button>
            </Link>
        </div>
    );
}

export default App;
