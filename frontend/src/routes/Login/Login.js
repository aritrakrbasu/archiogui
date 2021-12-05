import React, { useEffect, useRef } from 'react'
import './Login.css'
import {Col, Form, Row, } from 'react-bootstrap'
import user from './user.png'
import logoLarge from './logoLarge.png'
import logoSmall from './logoSmall.png'
import Button from '@restart/ui/esm/Button'
import { useNavigate } from 'react-router'
import { useAuth } from '../../Components/AuthProvider'
function Login() {
    const navigate = useNavigate();
    const {login, currentUser} = useAuth();

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect (() => {
        if(currentUser && currentUser.userId) {
            navigate('/dashboard')
        }
    }, [currentUser])

    return (
       <div className="signupContainer">
           <div className="signupContainerOverlay">
           <div className="logoContainer">
               <img src={logoSmall} className="logoSmall" />
           </div>
               <Row noGutter className='m-0'>
                   <Col lg={6} className="leftContainer">
                       <div className="leftContainerInner">

                        <h1 className="textheader">
                                Time to Login <span></span>
                        </h1>
                        
                            <Form onSubmit={(e) => {
                                e.preventDefault();
                                login(emailRef.current.value, passwordRef.current.value);
                            }}>
                                    
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        
                                        <Form.Control type="email" placeholder="Enter email" className="styledInput" ref={emailRef} required/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        
                                        <Form.Control type="password" placeholder="Password" className="styledInput" ref={passwordRef} required/>
                                    </Form.Group>
                                    <Row className="rowShift">
                                        <Col>
                                            <Form.Check type="checkbox" label="Remember me" className="styledRememberMe" />
                                        </Col>
                                        <Col className="colShift">
                                            <a href='' className='style4ForgetPwd text-white'>
                                                {" "}
                                                Forget Password?{" "}
                                            </a>
                                        </Col>
                                    </Row>
                                    <Button variant="primary" className="smallbtn" onClick={()=>navigate('/signup')}>
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
    );
}

export default Login;
