import React, { useRef } from 'react'
import './Signup.css'
import {Col, Form, Row, } from 'react-bootstrap'
import user from './user.png'
import logoLarge from './logoLarge.png'
import logoSmall from './logoSmall.png'
import Button from '@restart/ui/esm/Button'
import { useAuth } from '../../Components/AuthProvider'
import { useNavigate } from 'react-router'

function Signup() {
    const navigate = useNavigate();
    const {register, currentUser} = useAuth();

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

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
                            <Form onSubmit={(e) => {
                                e.preventDefault();
                                register(emailRef.current.value, passwordRef.current.value, nameRef.current.value)
                             }}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="Name" className="styledInput" ref={nameRef}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter email" className="styledInput" ref={emailRef}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" className="styledInput" ref={passwordRef}/>
                                    </Form.Group>
                                    <Button variant="primary" className="smallbtn" onClick={()=>navigate('/login')}>
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
