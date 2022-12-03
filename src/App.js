import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import NoRoute from './components/NoRoute';
import './App.css';
import items from './data/items';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='shop' element={<Shop {...items} />} />
        <Route path='*' element={<NoRoute />} />
      </Routes>
    </>
  );
}

export default App;
