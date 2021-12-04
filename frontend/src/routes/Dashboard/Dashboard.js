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

    useEffect(() => {
        axios.get("https://archiogui.herokuapp.com/getallplaces").then(data=>{
           if(data.status===200) {
                var places = data.data.places
                setplaceDetails(places)
           }
       })
    }, [])

    useEffect(() => {
            var dupPlaceDetails = [...placeDetails]
            var randomPlaces = []
            var count = placeDetails.length > 8 ?8 : placeDetails.length
            for(let i=0;i<count;i++) {
                console.log(dupPlaceDetails.length)
                var randomNumber = Math.floor(Math.random()*dupPlaceDetails.length)
                randomPlaces.push(dupPlaceDetails[randomNumber])
                dupPlaceDetails.splice(randomNumber,1)
            }
            
            setpopularPlaces(randomPlaces)
    }, [placeDetails])
    
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
               return(<PopularPlacesItem image={place?.image} place_name ={place?.place_name}/>)
           })
               
           }
           
            <PageHeader text={"Other Places"}/>
            {
                placeDetails && placeDetails.length > 0 && placeDetails.map((place)=>{
                    return(<PlaceItem image={place.image} place_name={place.place_name} location ={place.state} /> )
                })
            }
            {
                placeDetails && placeDetails.length > 0 && placeDetails.map((place)=>{
                    return(<PlaceItem image={place.image} place_name={place.place_name} location ={place.state} /> )
                })
            }
        </Row>
        </>
    )
}

export default Dashboard
