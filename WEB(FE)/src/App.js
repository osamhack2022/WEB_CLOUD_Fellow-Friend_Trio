import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './components/views/Admin'
import ChatCounselor from './components/views/ChatCounselor'
import ChatGuest from './components/views/ChatGuest'
import ForgotPassword from './components/views/ForgotPassword'
import Role from './components/views/Role'
import SignIn from './components/views/SignIn'
import Signup from './components/views/Signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Role />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/f_pw" element={<ForgotPassword />} />
        <Route path="/chatguest/:roomid" element={<ChatGuest />} />
        <Route path="/ChatCounselor" element={<ChatCounselor />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
