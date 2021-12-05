import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function PlaceItem({ image, place_name, location }) {
	return (
		<Col lg={3}>
			<Link to={`/place/${place_name}`}>
				<div
					className='placeItemHolder'
					style={{ backgroundImage: `url(${image})` }}>
					<div className='placeItemName'>
						{place_name}
						<div className='placeItemLocation'>{location}</div>
					</div>
				</div>
			</Link>
		</Col>
	);
}

export default PlaceItem;
