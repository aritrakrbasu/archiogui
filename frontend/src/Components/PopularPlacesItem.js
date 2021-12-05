import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function PopularPlacesItem({image,place_name}) {
    const uri = encodeURI(place_name)
    return (
        <Link to={`/place/${uri}`}>
            <div className="placeItem" style={{backgroundImage:`URL(${image})`}}>
                <div className="placeNameHolder">
                    {place_name}
                </div>
            </div>
        </Link>
    )
}

export default PopularPlacesItem
