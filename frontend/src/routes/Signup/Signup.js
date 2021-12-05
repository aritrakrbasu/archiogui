import React, { useEffect, useRef, useState } from 'react'
import './Signup.css'
import {Col, Form, Image, Row} from 'react-bootstrap'
import user from './user.png'
import logoLarge from './logoLarge.png'
import logoSmall from './logoSmall.png'
import Button from '@restart/ui/esm/Button'
import { useAuth } from '../../Components/AuthProvider'
import { useNavigate } from 'react-router'
import { storageRef } from '../../firebase'

function Signup() {
	const navigate = useNavigate();
	const { register, currentUser } = useAuth();

	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
    const userImgRef = useRef(null);
    const [userImage, updateUserImage] = useState(user);
    const [userImageObj, updateUserImageObj] = useState(null)

    useEffect(()=>{
        if(currentUser && currentUser.userId){
            navigate('/dashboard')
        }
    },[currentUser])

    const fileHandler = event => {
        let reader = new FileReader();
        reader.onload = function(e) {
          updateUserImage(e.target.result);
        };
        if(event.target.files.length){
            reader.readAsDataURL(event.target.files[0]);
            updateUserImageObj(event.target.files[0]);
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        register(emailRef.current.value, passwordRef.current.value, nameRef.current.value, userImageObj ? userImageObj : null);
    }

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
                                Create an account <span></span>
                        </h1>
                            <Form onSubmit={(e) => { handleSubmit(e) }}>
                                <Form.Group className="m-1 userIcon d-flex flex-column justify-content-center align-items-center" controlId="uploadUserImage" >
                                    <Image src={userImage} roundedCircle width={"125px"} height={"125px"} onClick={()=>userImgRef.current.click()}/>
                                    <Form.Control type="file" className="styledInput imgInput" accept="image/*" onChange={(e)=>fileHandler(e)} ref={userImgRef} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Control type="text" placeholder="Name" className="styledInput" ref={nameRef} required/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" className="styledInput" ref={emailRef} required/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" className="styledInput" ref={passwordRef} required/>
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

export default Signup;
