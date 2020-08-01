import React, { useState, useEffect } from "react";
import Axios from "axios";
import { random, commerce } from 'faker';
import { Container, Col, Row } from "reactstrap";
import CardItem from "./CardItem";

// Setting up entities for making api request
const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";

const PurchasePage = ({ addToCart }) => {
    const [products, setProducts] = useState([]);

    // Fetching photos from pexels api.
    const fetchPhotos = async () => {
        const { data } = await Axios.get(apiUrl, {
            headers: {
                Authorization: apiKey
            }
        })


        const { photos } = data;
        const allPhotosLocal = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: random.uuid()
        }))

        setProducts(allPhotosLocal);
    }

    // Fetching data from api at the time of app load
    useEffect(() => {
        fetchPhotos()
    }, [])


    return (
        <Container fluid>
            <h1 className="text-info text-center">Buy Page</h1>
            <Row>
                    {products.map(product => (
                        <Col key={product.id} xl={3} md={4}>
                            <CardItem product={product} addToCart={addToCart} />
                        </Col>
                    ))}
            </Row>
        </Container>
    );
}

export default PurchasePage;