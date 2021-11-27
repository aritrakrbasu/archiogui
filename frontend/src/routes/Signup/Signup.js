import React from 'react'
import './Signup.css'
import {Col, Form, Row, } from 'react-bootstrap'
import user from './user.png'
import logoLarge from './logoLarge.png'
import logoSmall from './logoSmall.png'
import Button from '@restart/ui/esm/Button'
function Signup() {
    return (
       <div className="signupContainer">
           <div className="signupContainerOverlay">
           <div className="logoContainer">
               <img src={logoSmall} className="logoSmall" />
           </div>
               <Row>
                   <Col lg={6} className="leftContainer">
                       <div className="leftContainerInner">

                        <h1 className="textheader">
                                Create an account <span></span>
                        </h1>
                        <img src={user} className="userIcon"/>
                            <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="Name" className="styledInput" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter email" className="styledInput" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" className="styledInput"/>
                                    </Form.Group>
                                    <Button variant="primary" className="smallbtn" type="submit">
                                        Login
                                    </Button>
                                    <Button variant="primary" className="largebtn" type="submit">
                                        Signup Now
                                    </Button>
                            </Form>
                            </div>
                   </Col>
                   <Col lg={6} className="rightContainer">
                       <img src={logoLarge}  className="bigLogo"/>
                   </Col>
               </Row>
           </div>
       </div>
    )
}

export default Signup
