import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function PopularPlacesItem({ image, place_name }) {
	const uri = encodeURI(place_name)
    return (
        <Col xl={2} lg={2} xs={6} className='placeItemContainer'>
            <Link to={`/place/${uri}`}>
                <div className='placeItem' style={{ backgroundImage: `URL(${image})` }}>
                    <div className='placeNameHolder'>{place_name}</div>
                </div>
            </Link>
        </Col>
	);
}

export default PopularPlacesItem;
