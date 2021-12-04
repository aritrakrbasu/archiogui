import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './routes/Signup/Signup';
import Login from './routes/Login/Login';
import Forgetpwd from './routes/Forgetpwd/Forgetpwd';
import Dashboard from './routes/Dashboard/Dashboard';
import Explore from './routes/Explore/Explore';
import Profile from './routes/Profile/Profile';
import AuthProvider from './Components/AuthProvider'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App;
