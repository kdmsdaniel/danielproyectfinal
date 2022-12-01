import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/products.slice';
import Button from 'react-bootstrap/Button';
import { createcartThunk } from '../store/slices/cart.slice';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';

const ProductsDetail = () => {

    const { id } = useParams();

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProductsThunk());
    }, []);

    const productsList = useSelector(state => state.products)

    const product = productsList.find(product => product.id === Number(id))
    const relateProducts = productsList.filter(
        (product) => product.category.id === product.category.id 
       
    )
    console.log(relateProducts)

    const [quantity, setQuantity] = useState("");

    const addToproducts = () => {
        const products = {
            id: product.id,
            quantity: quantity
        }
        console.log(products)
        dispatch(createcartThunk(products))
    }
    return (

        <div className='clasdiv' >
            <h1>Products</h1>
            <Link style={{ textDecoration: "none" }}
                as={Link} to="/">
                <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>

            </Link>
            <Row>
                {/* Descripcion de los productos */}
                <Col lg={4}>
                    <img src={product?.productImgs[0]} style={{ width: 300, objectFit: "contain" }} alt="" />

                </Col>
                <Col lg={5}>
                    <ListGroup>
                        <input type="text"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)} />

                        <ListGroup.Item
                            onClick={addToproducts}
                            style={{ cursor: "pointer" }}
                        >
                            submit
                        </ListGroup.Item>
                    </ListGroup>
                    <p>{product?.description}</p>
                    <h4>Price: {product?.price}</h4>
                </Col>
                {/* Productos relacionadas */}
                <Col lg={3} >
                   
                <Card>
                    {relateProducts.map((product) => (
                  <Link to={`/Products/${product.id}`} style={{textDecoration: "none"}} >
                    <Card.Img src={product.productImgs[0]} style={{ objectFit: "contain", height: 150 }} alt="" />

                    <Card.Body>
                      <Card.Title>{product.title} </Card.Title>
                      <Card.Text>
                        <ol key={product.id}>



                          <h4>Price: {product.price}</h4>
                        </ol>
                      </Card.Text>
                    </Card.Body> 
                    
                  </Link>))}
                </Card>

                </Col>
            </Row>




        </div>


    );
};

export default ProductsDetail;