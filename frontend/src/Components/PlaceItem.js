    import React from 'react'
import { Col } from 'react-bootstrap'

    function PlaceItem({image,place_name,location}) {
        return (
            <Col sm={2} className="placeItemHolder" style={{backgroundImage:`url(${image})`}}>
                <div className="placeItemName">
                    {place_name}
                    <div className="placeItemLocation">
                    {location}
                </div>
                </div>
            </Col>
        )
    }

    export default PlaceItem
