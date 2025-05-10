import './App.css'
import Main from './components/Main.jsx'
import Menu from './components/Menu.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Library from './components/Library.jsx'
import Footer from './components/Footer.jsx'
import Newbook from './components/Newbook.jsx'
import Logout from './components/Logout.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className='bg-gray-950'>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Library" element={<Library />} />
          <Route path="/Newbook" element={<Newbook />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  )
}


export default App
