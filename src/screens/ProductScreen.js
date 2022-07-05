import React from "react";

import { Link, useParams } from 'react-router-dom'
import products from "../products";

import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from "../components/Rating";
const ProductScreen = ({match}) => {

const {id}=useParams()
  const product=products.find((p)=>p._id===id)
    console.log("Hello")
  return (
    <div>
            <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>

          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            </Row>
    </div>
  );
};

export default ProductScreen;