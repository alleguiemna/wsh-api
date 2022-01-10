import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Button,Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState()
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) =>setError(error.response.data));
  }, [id]);
  if (loading)
  return <Spinner animation="border" />
  return (
    <Card style={{ width: "18rem", margin: "20px" }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <h6>{user.username}</h6>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <Link to="/">
          <Button variant="primary">Go back</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default UserDetail;
