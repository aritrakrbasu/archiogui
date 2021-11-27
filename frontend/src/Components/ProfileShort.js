import React from 'react'
import { Row ,Col} from 'react-bootstrap'
import userIcon from './user.png'
import './components.css'
function ProfileShort() {
    return (
        <Row className="profileContainer">
            <Col className="welcomeTextContainer">
                <h1 className="welcomeText"> <span>Hello</span> Aritra !</h1>
                <p>The destination is not important the journey is</p>
            </Col>
            <Col className="imageHolder">
                <img src={userIcon} />
            </Col>
        </Row>
    )
}

export default ProfileShort
