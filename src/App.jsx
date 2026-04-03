import './App.css'
import { Routes, Route } from 'react-router-dom'
import Mainpage from './pages/Mainpage'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Catalog from './pages/Catalog'
import Header from './components/header/Header'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </div>
  );
}

export default App
