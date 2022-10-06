import React, { component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUp from '/workspaces/WEB_Fellow-Friend_Trio/WEB(FE)/src/modules/SignUp.js';
import SignIn from '/workspaces/WEB_Fellow-Friend_Trio/WEB(FE)/src/modules/SignIn.js';
import Index from '/workspaces/WEB_Fellow-Friend_Trio/WEB(FE)/src/modules/Home.js';
import ForgotPassword from './modules/ForgotPassword';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/f_pw" element={<ForgotPassword />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
