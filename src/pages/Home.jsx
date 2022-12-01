import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, Col, Form, InputGroup, ListGroup, Row } from "react-bootstrap";
import { filterProductsThunk, filterNameThunk, getProductsThunk } from "../store/slices/products.slice";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products)
  const [categoriesList, setCategoriesList] = useState([]);
  const [inputSearch, setiInputSearch] = useState("");

  useEffect(() => {
    dispatch(getProductsThunk());

    axios
      .get("https://e-commerce-api.academlo.tech/api/v1/products/categories")
      .then((res) => setCategoriesList(res.data.data.categories));
  }, []);

  console.log(categoriesList)
  return (
    <div>
      <Row>
        <Col lg={3}>
          <ListGroup>

            {categoriesList.map((category) => (
              <ListGroup.Item
                key={category.id} onClick={() => dispatch(filterProductsThunk(category.id))}
                style={{ cursor: "pointer" }}
              >

                {category.name}

              </ListGroup.Item>
            ))}
          </ListGroup>


        </Col>
        <Col lg={9}>
          <h1>ECOMMERCE</h1>

          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={inputSearch}
              onChange={e => setiInputSearch(e.target.value)}
            />
            <Button
              variant="outline-secondary"
              onClick={() => dispatch(filterNameThunk(inputSearch))}
            >
              Search
            </Button>
          </InputGroup>

          <Row xs={1} md={4} className="g-4">
            {products.map(product => (
              <Col>
                <Card>
                  <Link to={`/Products/${product.id}`} style={{ textDecoration: "none" }} >
                    <Card.Img src={product.productImgs[0]} style={{ objectFit: "contain", height: 200 }} alt="" />

                    <Card.Body>
                      <Card.Title><p>{product.title} </p></Card.Title>
                      <Card.Text>
                        <ol key={product.id}>



                          <h4>Price: {product.price}</h4>
                        </ol>
                      </Card.Text>
                    </Card.Body>
                  </Link>
                </Card>

              </Col>
            ))}
          </Row>






        </Col>
      </Row>


    </div>

  );
};

export default Home;