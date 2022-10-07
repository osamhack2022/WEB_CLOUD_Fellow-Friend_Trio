import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ForgotPassword from './components/views/ForgotPassword'
import Home from './components/views/Home'
import SignIn from './components/views/SignIn'
import Signup from './components/views/Signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/f_pw" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
