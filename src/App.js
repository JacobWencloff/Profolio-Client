import logo from './logo.svg';
import {Link, Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './Components/Home';
import Skills from './Components/Skills';


function App() {
  return (
    <div className="App">
      <Link to='/' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Skills' element={<Skills/>} />
      </Routes>
      
    </div>
  );
}

export default App;
