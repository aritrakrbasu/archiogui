import React from 'react'

function PopularPlacesItem({image,place_name}) {
    return (
        <div className="placeItem" style={{backgroundImage:`URL(${image})`}}>
            <div className="placeNameHolder">
                {place_name}
            </div>
        </div>
    )
}

export default PopularPlacesItem
