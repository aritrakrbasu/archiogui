import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import "./DetailsPage.css";
import robotIcon from "./robot.png";
import axios from "axios";

function DetailsPage() {
	let { placeName } = useParams();
	const [placeDetails, setPlaceDetails] = useState(null);
	function playAudio() {
		var tts = window.speechSynthesis;
		var voices = tts.getVoices();

		var speak = new SpeechSynthesisUtterance(
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vnjcnldnvmvnmdn m;;l[jms hdklf;l rkfoioepp Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vnjcnldnvmvnmdn m;;l[jms hdklf;l rkfoioeppLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vnjcnldnvmvnmdn m;;l[jms hdklf;l rkfoioeppLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vnjcnldnvmvnmdn m;;l[jms hd"
		);
		if (voices[40].name === "Veena") speak.voice = voices[40];
		tts.speak(speak);
	}

	useEffect(() => {
		console.log(placeName);
		axios
			.post("https://archiogui.herokuapp.com/findplace", {
				place_name: placeName,
			})
			.then((data) => {
				console.log(data.data);
				setPlaceDetails(data.data);
			});
	}, [placeName]);
	return (
		<Row className='pageWrap'>
			<Col>
				<Header />
			</Col>

			<Col>
				<Navbar />
			</Col>
			<Row>
				{placeDetails && (
					<div className='detailsPageContainer'>
						<div
							className='headerPhoto'
							style={{
								backgroundImage: `URL(
						${placeDetails.image}
					)`,
							}}>
							<div className='headerPhotoContainer'>
								<div className='headerplaceDetailsContainer'>
									<h2>{placeDetails.place_name}</h2>
									<p>
										{placeDetails.state} , {placeDetails.Region}
									</p>
								</div>
							</div>
						</div>
						<div className='robotIcon' onClick={playAudio}>
							<img src={robotIcon} />
						</div>
						<div className='placeDetailsContainer'>
							{placeDetails.long_desc}
						</div>
					</div>
				)}
			</Row>
		</Row>
	);
}

export default DetailsPage;
