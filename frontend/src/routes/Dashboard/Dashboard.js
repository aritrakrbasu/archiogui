import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../../Components/Header'
import Navbar from '../../Components/Navbar'
import PageHeader from '../../Components/PageHeader'
import PlaceItem from '../../Components/PlaceItem'
import PopularPlacesItem from '../../Components/PopularPlacesItem'
import ProfileShort from '../../Components/ProfileShort'
import './Dashboard.css'
function Dashboard() {
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
    return (
        <>
        <Row className="pageWrap">
                <Col>
                    <Header/>
                </Col>
                <Col>
                    <Navbar />
                </Col>

            <ProfileShort/>
            <PageHeader text={"Popular Places"} />
           { data && data.length > 0 && data.map((place)=>{
               return(<PopularPlacesItem image={place.image} place_name ={place.place_name}/>)
           })
               
           }
            <PageHeader text={"Other Places"}/>
            {
                data && data.length > 0 && data.map((place)=>{
                    return(<PlaceItem image={place.image} place_name={place.place_name} location ={place.location} /> )
                })
            }
        </Row>
        </>
    )
}

export default Dashboard
