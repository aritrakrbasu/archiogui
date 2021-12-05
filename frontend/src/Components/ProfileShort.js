import React from 'react'
import { Row ,Col} from 'react-bootstrap'
import userIcon from './defaultUser.svg'
import './components.css'
import { useAuth } from '../Components/AuthProvider'
import Jdenticon from 'react-jdenticon';
import { Link } from 'react-router-dom'

function ProfileShort() {

    const {currentUser} = useAuth();

    return (
        <Row className="profileContainer">
            <Col xs={8} className="welcomeTextContainer">
                {" "}
                <h1 className="welcomeText"> 
                    <span>Hello</span> {currentUser.displayName.split(' ')[0]} !
                </h1>
                <p>The destination is not important the journey is!</p>
            </Col>
            <Col xs={4} className="imageHolder">
                <Link to="/profile">{(currentUser.profileImgURL!=null) ? (<img src={currentUser.profileImgURL} />):(<Jdenticon size="72" text={currentUser.displayName}/>)}</Link>
            </Col>
        </Row>
    )
}

export default ProfileShort;
