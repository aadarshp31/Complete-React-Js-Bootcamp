import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardImg,
    Button
} from "reactstrap";

const CardItem = ({ product, addToCart }) => {
    return(
        <Card className="my-2">
            <CardImg top height="250" width="100%" src={product.smallImage} />
            <CardBody className="text-center">
                <CardTitle>{product.productName}</CardTitle>
                <CardText className="secondary">Price Rs. {product.productPrice}</CardText>
                <Button color="success" onClick={() => addToCart(product)}>
                Add to Cart
                </Button>
            </CardBody>
        </Card>
    );
}

export default CardItem;