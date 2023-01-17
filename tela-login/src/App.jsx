import './Style.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
