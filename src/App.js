import { Routes, Route } from 'react-router-dom'
import './App.css';

import Header from './components/Header'
import Home from './pages/Home'
import Add from './pages/Add'
import Single from './pages/Single'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/single/:id" element={<Single />} />
      </Routes>
    </div>
  );
}

export default App;
