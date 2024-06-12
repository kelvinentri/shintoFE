import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
    const [userInput, setUserInput] = useState({});
    const handleChange = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value })

    }
    useEffect(() => {
    }, [userInput])
    const navigate =useNavigate()
    const submit = (e) => {
        e.preventDefault();

        try{
            axios.post(`${process.env.REACT_APP_API}/login`, userInput).then((res) => {
         localStorage.setItem('token',res.data.token)
            navigate('/usersdata')
        })
        .catch((err)=>{
            alert('invaid credentials')
        })
        }
        catch(error){
            console.error("failed to login",error);
        }

        
    }
    return (
        <div>
            <Form onSubmit={submit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> UserName:</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={userInput.userName} name='userName' onChange={handleChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password :</Form.Label>
                    <Form.Control type="password" placeholder="Password"   value={userInput.password} name='password' onChange={handleChange} required />
                </Form.Group>
                
                
                 <Button variant="primary" type="submit">
                    Login
                </Button>
               
            </Form>
            {/* <form onSubmit={submit}>
                <label>UserName</label>
                <input type='text' value={userInput.userName} name='userName' onChange={handleChange} required />
                <label>Password</label>
                <input type='password' value={userInput.passed} name='password' onChange={handleChange} required />
                <button type='submit'> Login</button>
            </form> */}



        </div>

    )
}

export default Login