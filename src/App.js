import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import NoRoute from './components/NoRoute';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='shop' element={<Shop />} />
      <Route path='*' element={<NoRoute />} />
    </Routes>
  );
}

export default App;
