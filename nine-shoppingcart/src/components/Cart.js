import React from "react";
import {
    Container,
    Col,
    Row,
    ListGroup,
    ListGroupItem,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button
} from "reactstrap";

const Cart = ({ cart, buyItem, removeItem }) => {
    let amount = 0;
    cart.forEach(item => {
        amount += parseFloat(item.productPrice);
    })

    return (
        <Container fluid>
        <h1 className="text-info">Your Cart</h1>
            <ListGroup>
                {cart.map(item => (
                    <ListGroupItem key={item.id}>
                        <Col>
                            <img
                                height={80}
                                src={item.tinyImage}
                            />
                        </Col>
                        <Col className="text-center">
                            <div className="text-info">
                                {item.productName}
                            </div>
                            <span>Price: {item.productPrice}</span>
                            <Button color="danger" onClick={() => removeItem(item.id)}>Remove Item</Button>
                        </Col>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </Container>
    );
}

export default Cart;