import React, { useState, useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import PageHeader from "../../Components/PageHeader";
import ProfileShort from "../../Components/ProfileShort";
import PlaceItem from "../../Components/PlaceItem";
import NSF from "../../Components/NSF";
import axios from "axios";
import "./Explore.css";

function Explore() {
	const [placeDetails, setplaceDetails] = useState([]);
	const [filteredPlaces, setFilteredPlaces] = useState([]);
	const [filterStateName, setFilterStateName] = useState([]);
	useEffect(() => {
		axios.get("https://archiogui.herokuapp.com/getallplaces").then((data) => {
			if (data.status === 200) {
				var places = data.data.places;
				setplaceDetails(places);
				setFilteredPlaces(places);
				var nameOfPlace = [];

				places.forEach((place) => {
					if (nameOfPlace.length > 0) {
						if (!nameOfPlace.includes(place.state.trim()))
							nameOfPlace.push(place.state.trim());
					} else nameOfPlace.push(place.state.trim());
				});
				setFilterStateName(nameOfPlace);
			}
		});
	}, []);

	function filterList(e) {
		var typedValue = e.target.value;

		var filteredlist = placeDetails.filter(
			(place) =>
				place?.place_name?.toLowerCase().includes(typedValue.toLowerCase()) ||
				place?.state?.toLowerCase().includes(typedValue.toLowerCase()) ||
				place?.cat?.toLowerCase().includes(typedValue.toLowerCase()) ||
				place?.Region?.toLowerCase().includes(typedValue.toLowerCase())
		);

		setFilteredPlaces(filteredlist);
	}

	function sortListByState(stateName) {
		console.log(stateName);
		var filteredlist = placeDetails.filter((place) =>
			place.state?.toLowerCase().includes(stateName.toLowerCase())
		);
		if (filteredlist.length > 0) setFilteredPlaces(filteredlist);
	}
	return (
		<>
			<Row className='pageWrap'>
				<Col>
					<Header />
				</Col>

				<Col>
					<Navbar />
				</Col>
				<ProfileShort />
				<PageHeader text={"Let's Explore"} />

				<Form>
					<Form.Group as={Row} className='mb-3' controlId='formHorizontalEmail'>
						<Form.Label column sm={2}>
							Search Now
						</Form.Label>
						<Col sm={10}>
							<Form.Control
								type='text'
								placeholder='Type your destination'
								className='searchField'
								onChange={filterList}
							/>
						</Col>
					</Form.Group>
				</Form>

				<ul className='navbarItemStyle'>
					<li className='placeName' onClick={() => sortListByState("")}>
						<span>All</span>
					</li>
					{filterStateName &&
						filterStateName.length > 0 &&
						filterStateName.map((loc, key) => {
							if (key == filterStateName.length - 1) {
								return (
									<li
										className='placeName'
										onClick={() => sortListByState(loc)}>
										{" "}
										{loc}
									</li>
								);
							} else {
								return (
									<li
										className='placeName'
										onClick={() => sortListByState(loc)}>
										{" "}
										<span>{loc}</span>
									</li>
								);
							}
						})}
				</ul>

				{filteredPlaces &&
					filteredPlaces.length > 0 &&
					filteredPlaces.map((place) => {
						return (
							<PlaceItem
								image={place?.image}
								place_name={place.place_name}
								location={place.location}
							/>
						);
					})}
				{filteredPlaces.length === 0 && <NSF />}
			</Row>
		</>
	);
}

export default Explore;
