import './App.css'
import { Routes, Route } from 'react-router-dom'
import Mainpage from './pages/Mainpage'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Catalog from './pages/Catalog'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-grow'>
        <Header />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
