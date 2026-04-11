import './App.css'
import { Routes, Route } from 'react-router-dom'
import Mainpage from './pages/Mainpage/Mainpage'
import Catalog from './pages/Catalog/Catalog'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import CoursePage from './pages/Course/CoursePage'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-grow'>
        <Header />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="course/:id" element={<CoursePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
