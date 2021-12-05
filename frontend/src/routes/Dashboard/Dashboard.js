import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import PageHeader from "../../Components/PageHeader";
import PlaceItem from "../../Components/PlaceItem";
import PopularPlacesItem from "../../Components/PopularPlacesItem";
import ProfileShort from "../../Components/ProfileShort";
import { useAuth } from '../../Components/AuthProvider';
import { useNavigate } from "react-router";
import "./Dashboard.css";
import axios from "axios";
function Dashboard() {
	const [placeDetails, setplaceDetails] = useState([]);
	const [popularPlaces, setpopularPlaces] = useState([]);
	const { currentUser } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		axios.get("https://archiogui.herokuapp.com/getallplaces").then((data) => {
			if (data.status === 200) {
				var places = data.data.places;
				setplaceDetails(places);
			}
		});
	}, []);

	useEffect(() => {
		var dupPlaceDetails = [...placeDetails];
		var randomPlaces = [];
		var count = placeDetails.length > 12 ? 12 : placeDetails.length;
		for (let i = 0; i < count; i++) {
			var randomNumber = Math.floor(Math.random() * dupPlaceDetails.length);
			randomPlaces.push(dupPlaceDetails[randomNumber]);
			dupPlaceDetails.splice(randomNumber, 1);
		}

		setpopularPlaces(randomPlaces);
	}, [placeDetails]);

	useEffect(()=>{
		if(!currentUser)
			navigate('/login');
	}, [currentUser])

	return (
		<Container fluid className='pageContainer'>
			<Row className='pt-4'>
				<Col>
					<Header />
				</Col>
				<Col>
					<Navbar />
				</Col>
			</Row>
			<Row>
				<Col>
					<ProfileShort />
				</Col>
				<Row>
					<Col>
						<PageHeader text={"Popular Places"} />
					</Col>
				</Row>
				<Row className='popularPlacesContainer m-0 p-0' style={{display: 'flex', flexDirection:'row'}}>
					{popularPlaces &&
						popularPlaces.length > 0 &&
						popularPlaces.map((place) => {
							return (
								<PopularPlacesItem
									image={place?.image}
									place_name={place?.place_name}
								/>
							);
						})}
				</Row>
				<Row className='popularPlacesContainer m-0 p-0'>
					<Col>
						<PageHeader text={"Other Places"} />
						<Row>
							{placeDetails &&
								placeDetails.length > 0 &&
								placeDetails.map((place) => {
									return (
										<PlaceItem
											image={place.image}
											place_name={place.place_name}
											location={place.state}
										/>
									);
								})}
						</Row>
					</Col>
				</Row>
			</Row>
		</Container>
	);
}

export default Dashboard;
