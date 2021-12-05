import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import PageHeader from "../../Components/PageHeader";
import PlaceItem from "../../Components/PlaceItem";
import ProfileShort from "../../Components/ProfileShort";

function Profile() {
	var data = [
		{
			image:
				"https://images.indianexpress.com/2018/06/red-fort-759-getty-images.jpg",
			place_name: "Red Fort",
			location: "New Delhi",
		},
		{
			image:
				"https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg",
			place_name: "Taj Mahal",
			location: "New Delhi",
		},
		{
			image:
				"https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg",
			place_name: "Taj Mahal",
			location: "New Delhi",
		},
		{
			image:
				"https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg",
			place_name: "Taj Mahal",
			location: "New Delhi",
			location: "New Delhi",
		},
	];
	return (
		<div className='pageWrap'>
			<Row>
				<Col>
					<Header />
				</Col>
				<Col>
					<Navbar />
				</Col>
			</Row>
			<Row className='profileContainer'>
				<ProfileShort />
			</Row>
			<Row>
				<PageHeader text={"Visited Places"} />
				{data &&
					data.length > 0 &&
					data.map((place) => {
						return (
							<PlaceItem
								image={place.image}
								place_name={place.place_name}
								location={place.location}
							/>
						);
					})}
			</Row>

			<Row>
				<PageHeader text={"Discover Places"} />
				{data &&
					data.length > 0 &&
					data.map((place) => {
						return (
							<PlaceItem
								image={place.image}
								place_name={place.place_name}
								location={place.location}
							/>
						);
					})}
			</Row>
		</div>
	);
}

export default Profile;
