import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="m-auto w-full sm:w-1/2 xl:w-1/3 flex flex-col gap-4 mt-10 px-4">
            <Link to="/qr-react/jsQR">
                <Button fullWidth sx={{ textTransform: 'none' }} variant="contained">
                    jsQR
                </Button>
            </Link>
            <Link to="/qr-react/zxing">
                <Button fullWidth sx={{ textTransform: 'none' }} variant="contained">
                    zxing
                </Button>
            </Link>
        </div>
    );
}

export default App;
