import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarked, FaPhone } from "react-icons/fa";

const Card = ({ details }) => {
    <Card>
        <CardBody className="text-center">
            <img
                src={details.picture.large} 
                height="150" 
                width="150" 
                className="rounded-circle img-thumbnail border-danger" 
                alt="User Profile Picture" 
                />
        </CardBody>
    </Card>
}

export default Card;