import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function UserList() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/getusersdata`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
    setData(response.data);
    } catch (err) {
      if (err.response?.data?.message === "unauthorized user") {
        navigate("/");
        localStorage.removeItem("token");
      }
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="row">
      {data.map((user, index) => (
        <div className="col-md-4 mb-4">
          <Card key={index} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={user.image} />
            <Card.Body>
              <Card.Title>{user.fullName}</Card.Title>
              <Card.Text>{user.about}</Card.Text>
              <Link to={"/usersdata/" + user.id}>
                <Button variant="primary">view</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default UserList;
