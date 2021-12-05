import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import "./DetailsPage.css";
import robotIcon from "./robot.svg";
import robotIcon1 from "./robot1.gif";
import axios from "axios";
import background from "./background.svg";
function DetailsPage() {
	let { placename } = useParams();
	const [placeDetails, setPlaceDetails] = useState(null);
	const [audioPlaying, setAudioPlaying] = useState(false);

	function playAudio(message) {
		var tts = window.speechSynthesis;
		var voices = tts.getVoices();

		var speak = new SpeechSynthesisUtterance(message);
		if (voices[40]?.name === "Veena") speak.voice = voices[40];

		if (audioPlaying) {
			tts.cancel();
		} else {
			speak.rate = 0.8;
			speak.lang = "en-US";
			tts.speak(speak);
		}

		setAudioPlaying(!audioPlaying);
	}

	useEffect(() => {
		axios
			.post("https://archiogui.herokuapp.com/findplace", {
				place_name: placename.trim(),
			})
			.then((data) => {
				console.log(data.data);
				setPlaceDetails(data.data);
			});
	}, [placename]);
	return (
		<div className='pageWrap'>
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
						{audioPlaying && (
							<div
								className='scifi'
								onClick={() => playAudio(placeDetails.long_desc)}>
								<img src={`${placeDetails.image}`} className='robotBig' />
							</div>
						)}
						<div className={audioPlaying ? "floatingIcon" : "robotIcon"}>
							<img
								src={audioPlaying ? robotIcon1 : robotIcon}
								className={audioPlaying ? "floatingRobotIcon" : "robotIco"}
								onClick={() => playAudio(placeDetails.long_desc)}
							/>
						</div>

						<div className='placeDetailsContainer'>
							{placeDetails.long_desc}
						</div>
					</div>
				)}
			</Row>
		</div>
	);
}

export default DetailsPage;
