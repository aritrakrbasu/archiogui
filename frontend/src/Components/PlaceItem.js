import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function PlaceItem({ image, place_name, location }) {
	return (
		<Link to={`/place/${place_name}`} className='placeItemHolder'>
			<Col
				sm={2}
				className='placeItemHolder'
				style={{ backgroundImage: `url(${image})` }}>
				<div className='placeItemName'>
					{place_name}
					<div className='placeItemLocation'>{location}</div>
				</div>
			</Col>
		</Link>
	);
}

export default PlaceItem;
