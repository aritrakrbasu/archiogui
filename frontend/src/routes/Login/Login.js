import React from 'react'
import './Login.css'
import {Col, Form, Row, } from 'react-bootstrap'
import user from './user.png'
import logoLarge from './logoLarge.png'
import logoSmall from './logoSmall.png'
import Button from '@restart/ui/esm/Button'
function Login() {
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
                                Time to Login <span></span>
                        </h1>
                        
                            <Form>
                                    
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        
                                        <Form.Control type="email" placeholder="Enter email" className="styledInput" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        
                                        <Form.Control type="password" placeholder="Password" className="styledInput"/>
                                    </Form.Group>
                                    <Row className="rowShift">
                                        <Col>
                                            <Form.Check type="checkbox" label="Remember me" className="styledRememberMe" />
                                        </Col>
                                        <Col className="colShift">
                                            <a href="" className="style4ForgetPwd" > Forget Password? </a > 
                                        </Col>
                                    </Row>
                                    <Button variant="primary" className="smallbtn" type="submit">
                                        Signup 
                                    </Button>
                                    <Button variant="primary" className="largebtn" type="submit">
                                        Login Now
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

export default Login