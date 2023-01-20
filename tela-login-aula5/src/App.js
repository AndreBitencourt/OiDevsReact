import logo from './logo.svg';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/Home'
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login></Login>} />
        <Route path="/home" element={<Home />}></Route>        
      </Routes>
    </Router>    
  );
}

export default App;
