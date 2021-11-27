import React from 'react'
import './Forgetpwd.css'
import {Col, Form, Row, } from 'react-bootstrap'
import user from './user.png'
import logoLarge from './logoLarge.png'
import logoSmall from './logoSmall.png'
import Button from '@restart/ui/esm/Button'
function Forgetpwd() {
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
                                Forgot Password <span></span>
                        </h1>
                        
                            <Form>
                                    
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        
                                        <Form.Control type="email" placeholder="Enter email" className="styledInput" />
                                    </Form.Group>

                                    
                                    
                                    <Button variant="primary" className="smallbtn" type="submit">
                                        Login 
                                    </Button>
                                    <Button variant="primary" className="largebtn" type="submit">
                                        Reset Password
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

export default Forgetpwd
