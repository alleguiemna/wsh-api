import React from "react";
import {Card,Button} from "react-bootstrap"
import {Link} from "react-router-dom"

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <Card style={{ width: "18rem",margin:"20px" }}>
      <h4 className="user">{user.name[0]}</h4>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <h6>{user.username}</h6>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <Link to={`/users/${user.id}`}><Button variant="primary">View Details</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
