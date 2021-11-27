import React from 'react'

function PlaceItem({image,place_name,location}) {
    return (
        <div className="placeItemHolder" style={{backgroundImage:`url(${image})`}}>
            <div className="placeItemName">
                {place_name}
                <div className="placeItemLocation">
                {location}
            </div>
            </div>
        </div>
    )
}

export default PlaceItem
