import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import QrCode from "./components/projet-1/qr-code-component-main/QrCode";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projet1-qr-code" element={<QrCode />} />
            </Routes>
        </Router>
    );
}

export default App;
