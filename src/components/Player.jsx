import React from "react";
import { Card } from "react-bootstrap";

// Using default parameters
const Player = ({
  name = "Unknown Player",
  team = "Unknown Team",
  nationality = "Unknown",
  position = "Unknown",
  jerseyNumber = 0,
  age = 0,
  image = "https://via.placeholder.com/150",
}) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team} <br />
          <strong>Nationality:</strong> {nationality} <br />
          <strong>Jersey Number:</strong> {jerseyNumber} <br />
          <strong>Position:</strong> {position} <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
