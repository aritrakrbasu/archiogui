import React from "react";
import { Col } from "react-bootstrap";

function PopularPlacesItem({ image, place_name }) {
	return (
		<Col lg={2} xs={6} className='placeItemContainer'>
			<div className='placeItem' style={{ backgroundImage: `URL(${image})` }}>
				<div className='placeNameHolder'>{place_name}</div>
			</div>
		</Col>
	);
}

export default PopularPlacesItem;
