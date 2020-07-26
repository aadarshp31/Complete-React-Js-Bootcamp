import React, {useState, useEffect} from "react";
import {Axios} from "axios";
import { random, commerce } from 'faker';
import { Container, Col, Row } from "reactstrap";

// Setting up entities for making api request
const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";

const PurchasePage = () => {
    return();
}

export default PurchasePage;