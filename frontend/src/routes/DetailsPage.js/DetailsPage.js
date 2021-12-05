import React from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import "./DetailsPage.css";
import robotIcon from "./robot.png";

function DetailsPage() {
	let { placeName } = useParams();

	function playAudio() {
		var tts = window.speechSynthesis;
		var voices = tts.getVoices();

		var speak = new SpeechSynthesisUtterance(
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vnjcnldnvmvnmdn m;;l[jms hdklf;l rkfoioepp Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vnjcnldnvmvnmdn m;;l[jms hdklf;l rkfoioeppLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vnjcnldnvmvnmdn m;;l[jms hdklf;l rkfoioeppLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vnjcnldnvmvnmdn m;;l[jms hd"
		);
		if (voices[40].name === "Veena") speak.voice = voices[40];
		tts.speak(speak);
	}
	return (
		<Row className='pageWrap'>
			<Col>
				<Header />
			</Col>

			<Col>
				<Navbar />
			</Col>
			<Row>
				<div className='detailsPageContainer'>
					<div
						className='headerPhoto'
						style={{
							backgroundImage: `URL(
						https://i.ytimg.com/vi/Retw2dTngrU/maxresdefault.jpg
					)`,
						}}>
						<div className='headerPhotoContainer'>
							<div className='headerplaceDetailsContainer'>
								<h2>Red Fort</h2>
								<p>Old Delhi, India.</p>
							</div>
						</div>
					</div>
					<div className='robotIcon' onClick={playAudio}>
						<img src={robotIcon} />
					</div>
					<div className='placeDetailsContainer'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim vnjcnldnvmvnmdn m;;l[jms hdklf;l rkfoioepp Lorem ipsum
						dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						vnjcnldnvmvnmdn m;;l[jms hdklf;l rkfoioeppLorem ipsum dolor sit
						amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
						ut labore et dolore magna aliqua. Ut enim ad minim vnjcnldnvmvnmdn
						m;;l[jms hdklf;l rkfoioeppLorem ipsum dolor sit amet, consectetur
						adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim vnjcnldnvmvnmdn m;;l[jms
						hdklf;l rkfoioeppLorem ipsum dolor sit amet, consectetur adipiscing
						elit, sed do eiusmod tempor incididunt ut labore et dolore magna
						aliqua. Ut enim ad minim vnjcnldnvmvnmdn m;;l[jms hdklf;l
						rkfoioeppLorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim vnjcnldnvmvnmdn m;;l[jms hdklf;l rkfoioeppLorem
						ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						vnjcnldnvmvnmdn m;;l[jms hdklf;l rkfoioepp Lorem ipsum dolor sit
						amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
						ut labore et dolore magna aliqua. Ut enim ad minim vnjcnldnvmvnmdn
						m;;l[jms hdklf;l rkfoioepp Lorem ipsum dolor sit amet, consectetur
						adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim vnjcnldnvmvnmdn m;;l[jms
						hdklf;l rkfoioeppLorem ipsum dolor sit amet, consectetur adipiscing
						elit, sed do eiusmod tempor incididunt ut labore et dolore magna
						aliqua. Ut enim ad minim vnjcnldnvmvnmdn m;;l[jms hdklf;l
						rkfoioeppLorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim vnjcnldnvmvnmdn m;;l[jms hdklf;l rkfoioeppLorem
						ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						vnjcnldnvmvnmdn m;;l[jms hdklf;l rkfoioeppLorem ipsum dolor sit
						amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
						ut labore et dolore magna aliqua
					</div>
				</div>
			</Row>
		</Row>
	);
}

export default DetailsPage;
