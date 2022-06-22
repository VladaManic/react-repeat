import { Routes, Route } from 'react-router-dom'
import './App.css';

import Header from './components/Header'
import Home from './pages/Home'
import Add from './pages/Add'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
