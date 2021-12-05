import React, {lazy, Suspense} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Navigate } from 'react-router'
import { useAuth } from './Components/AuthProvider'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './routes/Signup/Signup';
import Login from './routes/Login/Login';
import Forgetpwd from './routes/Forgetpwd/Forgetpwd';

function App() {
  const Explore = React.lazy(() => import('./routes/Explore/Explore'));
  const Profile = React.lazy(() => import('./routes/Profile/Profile'));
  const Dashboard = React.lazy(() => import('./routes/Dashboard/Dashboard'));
  const DetailsPage = React.lazy(() => import('./routes/DetailsPage/DetailsPage'));

  const privateRoutes = [
    {path: '/dashboard', element: <Suspense fallback={<div>Loading...</div>}><Dashboard/></Suspense>}, 
    {path: '/explore', element: <Suspense fallback={<div>Loading...</div>}><Explore/></Suspense>}, 
    {path: '/profile', element: <Suspense fallback={<div>Loading...</div>}><Profile /></Suspense>}, 
    {path: '/place/:placename', element: <Suspense fallback={<div>Loading...</div>}><DetailsPage /></Suspense>}
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
