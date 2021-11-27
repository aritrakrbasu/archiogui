import React, {useEffect, useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../../Components/Header'
import Navbar from '../../Components/Navbar'
import PageHeader from '../../Components/PageHeader'
import PlaceItem from '../../Components/PlaceItem'
import PopularPlacesItem from '../../Components/PopularPlacesItem'
import ProfileShort from '../../Components/ProfileShort'
import './Dashboard.css'
import axios from 'axios'
function Dashboard() {
    const [placeDetails, setplaceDetails] = useState([])
    const [popularPlaces, setpopularPlaces] = useState([]) 
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
    useEffect(() => {
       axios.get("https://archiogui.herokuapp.com/getallplaces").then(data=>{
           if(data.status===200) {
                setplaceDetails(data.data.places)
              
           }
       })
        
    }, [])
    useEffect (()=>{
        selectRandomPlaces()
    },[placeDetails])
    function selectRandomPlaces () {
        var dupPlaceDetails = placeDetails
        var randomPlaces = []
        for(let i=0;i<8;i++) {
            var randomNumber = Math.floor(Math.random()*dupPlaceDetails.length)
            randomPlaces.push(dupPlaceDetails[randomNumber])
            dupPlaceDetails.splice(randomNumber,1)
        }
        console.log(randomPlaces)
        setpopularPlaces(randomPlaces)
    }
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
           { popularPlaces && popularPlaces.length > 0 && popularPlaces.map((place)=>{
               return(<PopularPlacesItem image={place?.image} place_name ={place?.name}/>)
           })
               
           }
            <PageHeader text={"Other Places"}/>
            {
                placeDetails && placeDetails.length > 0 && placeDetails.map((place)=>{
                    return(<PlaceItem image={place.image} place_name={place.name} location ={place.location} /> )
                })
            }
        </Row>
        </>
    )
}

export default Dashboard
