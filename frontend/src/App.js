import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './routes/Signup/Signup';
import Login from './routes/Login/Login';
import Forgetpwd from './routes/Forgetpwd/Forgetpwd';
import Dashboard from './routes/Dashboard/Dashboard';
import Explore from './routes/Explore/Explore';
import Profile from './routes/Profile/Profile';
import { useAuth } from './Components/AuthProvider'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Navigate } from 'react-router'

function App() {

  const privateRoutes = [
    {path: '/dashboard', element: <Dashboard/>}, 
    {path: '/explore', element: <Explore/>}, 
    {path: '/profile', element: <Profile />}
  ]

  const {currentUser} = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        {privateRoutes.map(privateRoute => 
          <Route key={privateRoute.path} path={privateRoute.path} element={currentUser ? (privateRoute.element) : (<Navigate to="/login"/>)}/>
        )}
      </Routes>
    </Router>
  )
}

export default App;
