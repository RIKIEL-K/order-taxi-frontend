import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChooseRole from './pages/ChooseRole';
import Register from './pages/Register';
import Index from './pages/Index';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ValidateToken from './pages/ValidateToken';
import UpdatePassword from './pages/UpdatePassword';
import AccountSettings from './pages/AccountSettings';
import NotFound from './pages/NotFound';
import UserDashboard from './pages/UserDashboard';


function App() {
  return (
<>
    <Router>
      <Routes>
        <Route path="/" element={<ChooseRole/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/index/:id" element={ <Index/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound/>} />
        < Route path="/validate-token" element={<ValidateToken/>} />
        <Route path="/reset-password" element={<UpdatePassword />} />
        <Route path="/account-settings/:id" element={<AccountSettings />} />
         <Route path="/user-dashboard/:id" element={<UserDashboard />} />
      </Routes>
    </Router>
</>
  );
}

export default App;
