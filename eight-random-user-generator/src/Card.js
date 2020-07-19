import React from "react";
import { Card, CardBody, CardTitle, CardFooter } from "reactstrap";
import { FaEnvelope, FaMapMarked, FaPhone, FaUser } from "react-icons/fa";

const MyCard = ({ details }) => {
    const DOB = new Date(details.dob?.date).toLocaleString().split(",")[0];
    return (
        <Card>
            <CardBody className="text-center">
                <img
                    src={details.picture?.large}
                    height="150"
                    width="150"
                    className="rounded-circle img-thumbnail border-danger"
                    alt="User Profile"
                />
                <CardTitle className="text-primary">
                    <h1>
                        <span>{details.name?.title + " "}</span>
                        <span>{details.name?.first + " "}</span>
                        <span>{details.name?.last}</span>
                    </h1>
                </CardTitle>
                    <h5><FaEnvelope />{" " + details.email}</h5>
                    <h6>
                        <FaMapMarked />
                        {" " + details.location?.city + ", "}
                        {details.location?.state}
                    </h6>
                    <h6>
                        <FaUser />
                    username:
                    {" " + details.login?.username}
                    </h6>
                    <h6>
                        DOB:
                        
                            {" " + DOB}
                    </h6>
                    <h6>
                        Age:
                        <span className="badge-dark ml-2 p-1 rounded">
                            {details.dob?.age}
                        </span>
                    </h6>
            </CardBody>
            <CardFooter>
                <h6>
                    <FaPhone />
                    <span>{details.phone}</span>
                </h6>
            </CardFooter>
        </Card>
    );
}

export default MyCard;