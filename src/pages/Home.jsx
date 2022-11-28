import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button,  Form ,InputGroup } from "react-bootstrap";
import { filterProductsThunk, filterNameThunk, getProductsThunk } from "../store/slices/products.slice";

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products)
    const [categoriesList, setCategoriesList] = useState([]);
    const [inputSearch, setiInputSearch] = useState("");

  useEffect(() => {
    dispatch(getProductsThunk ());
   
    axios
      .get("https://e-commerce-api.academlo.tech/api/v1/products/categories")
      .then((res) => setCategoriesList(res.data.data.categories));
  }, []);

    console.log(categoriesList)
    return (
        <div className='App-react'>
           <h1>ECOMMERCE</h1> 
           
              {categoriesList.map((category) => (
                
                <Button key={category.id} onClick={() => dispatch(filterProductsThunk(category.id))}>
                 {category.name}
                 </Button>
               
              ))}
            <br />
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
           <main>
            <div className='clasdiv'>
             
              {products.map(product => (
                <ol key={product.id}>
                  <Link to= {`/Products/${product.id}`}>
                    <p>{product.title} </p>
                    <img src={product.productImgs[0]} style={{ width: 150 }} alt="" />
                  <h4>Price: {product.price}</h4>
                  </Link>
                  
                </ol>
              ))}
             </div>
            </main>
            </div>
    );
};

export default Home;