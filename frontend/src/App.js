import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./routes/Signup/Signup";
import Login from "./routes/Login/Login";
import Forgetpwd from "./routes/Forgetpwd/Forgetpwd";
import Dashboard from "./routes/Dashboard/Dashboard";
import Explore from "./routes/Explore/Explore";
import Profile from "./routes/Profile/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailsPage from "./routes/DetailsPage.js/DetailsPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/place' element={<DetailsPage />}>
					<Route path=':placeName' element={<DetailsPage />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
