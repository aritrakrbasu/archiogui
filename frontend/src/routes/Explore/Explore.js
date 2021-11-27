import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../../Components/Header'
import Navbar from '../../Components/Navbar'
import PageHeader from '../../Components/PageHeader'
import ProfileShort from '../../Components/ProfileShort'
import PlaceItem from '../../Components/PlaceItem'

import './Explore.css'

function Explore() {
    var data =[
        {
            image : "https://images.indianexpress.com/2018/06/red-fort-759-getty-images.jpg",
            place_name : "Red Fort",
            location:"New Delhi"
        },
        {
            image : "https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg",
            place_name : "Taj Mahal",
            location:"New Delhi"
        },
        {
            image : "https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg",
            place_name : "Taj Mahal",
            location:"New Delhi"
        },{
            image : "https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg",
            place_name : "Taj Mahal",
            location:"New Delhi",
            location:"New Delhi"
        },{
            image : "https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg",
            place_name : "Taj Mahal",
            location:"New Delhi"
        },{
            image : "https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg",
            place_name : "Taj Mahal",
            location:"New Delhi"
        },{
            image : "https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg",
            place_name : "Taj Mahal",
            location:"New Delhi"
        },{
            image : "https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg",
            place_name : "Taj Mahal",
            location:"New Delhi"
        }, 
    ]
    var nameOfPlace = [
            {location_name: "INDIA"},
            {location_name: "CHINA"},
            {location_name: "JAPAN"},
            {location_name: "AUSTRALIA"},
            {location_name: "SOUTH KOREA"},
            {location_name: "SRI LANKA"},
            {location_name: "EUROPE"},
            {location_name: "GERMANY"},
            {location_name: "BRAZIL"},
            {location_name: "BANGLADESH"},
            {location_name: "BHUTAN"},
            {location_name: "CHILE"},
            {location_name: "CAMBODIA"},
    ]
    return (
        <>
            <Row className = "pageWrap">
                <Col>
                    <Header />
                </Col>

                <Col>
                    <Navbar />
                </Col>
                <ProfileShort />
                <PageHeader text={"LETS GET EXPLORING"} />
                <ul className = "navbarItemStyle">
    
                {
                    nameOfPlace && nameOfPlace.length > 0 && nameOfPlace.map((loc, key)=>{
                        if(key==nameOfPlace.length-1) {
                            return ( 
                        
                                <li className="placeName"> {loc.location_name}</li>
                     
                         )
                        }
                        else {
                            return ( 
                        
                                <li className="placeName"> <span>{loc.location_name}</span></li>
                     
                        )
                        }
                      
                    })
                }

                </ul>
                
                {
                    data && data.length > 0 && data.map((place)=>{
                        return(<PlaceItem image={place.image} place_name={place.place_name} location ={place.location} />)
                    })
                }

            </Row>
        
        </>
    )
}

export default Explore
