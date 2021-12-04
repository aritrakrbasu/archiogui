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
    const [placeDetails, setplaceDetails] = useState(null)
    const [popularPlaces, setpopularPlaces] = useState(null) 
  
    useEffect(() => {
       axios.get("https://archiogui.herokuapp.com/getallplaces").then(data=>{
           if(data.status===200) {
                let places = data.data.places
                setplaceDetails(data.data.places)
                // selectRandomPlaces(places)
                setTimeout(()=>{selectRandomPlaces(places)}, 1000)
           }
       })
        
    }, [])
    // useEffect (()=>{
    //     if(placeDetails.length>0)
    //     selectRandomPlaces()
    // },[placeDetails])
    function selectRandomPlaces (places) {
        let dupPlaceDetails = places
        var randomPlaces = []
        for(let i=0;i<8;i++) {
            var randomNumber = Math.floor(Math.random()*dupPlaceDetails.length)
            randomPlaces.push(dupPlaceDetails[randomNumber])
            dupPlaceDetails.splice(randomNumber,1)
        }
        console.log(randomPlaces)
        setpopularPlaces(randomPlaces)
    }
    console.log(popularPlaces)
    console.log(placeDetails)
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
