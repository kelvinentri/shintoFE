import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function Particular() {

    const { userNo } = useParams()
    const [user, setUser] = useState(undefined);

    const fetchUser = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API}/getusersdata/${userNo}`);
        setUser(response.data);
    };

    useEffect(() => {
        fetchUser();
    }, [userNo]);
    if (user === undefined)
        return <div>Loading</div>
    return (
        <div className='row' style={{justifyContent:"center"}}>
            <Card style={{ width: '50rem' }}>
                <Card.Img variant="top" src={user.image} style={{width:"30%"}}/>
                <Card.Body>
                    <Card.Title> Name :{user.fullName}</Card.Title>
                    <Card.Text> <b>Email :</b>{user.email}</Card.Text>
                    <Card.Text> <b>Phone No:</b>{user.phone}</Card.Text>
                    <Card.Text> <b>Address :</b>{user.address}</Card.Text>
                    <Card.Text> <b>Role :</b>{user.role}</Card.Text>
                    <Card.Text> <b>About :</b>{user.about}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Particular