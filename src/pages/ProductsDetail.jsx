import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/products.slice';

const ProductsDetail = () => {

    const {id} = useParams();

    const dispatch = useDispatch();
  
    
    useEffect(() => {
        dispatch(getProductsThunk ());
      }, []);

    const productsList = useSelector(state => state.products)

    const product = productsList.find(product => product.id === Number(id))
    const relateProducts = productsList.filter(
        (product) => product.category.id === product.category.id
        
        ) 
    console.log(relateProducts)
    return (
        <div className='clasdiv' >
            <h1>Products</h1>
            <Link as={Link} to="/"><h3> Home </h3></Link>
            <img src={product?.productImgs[0]} style={{ width: 150 }} alt="" />
            <p>{product.description}</p>
            <h4>Price: {product.price}</h4>
          
          
            {relateProducts.map((product) => (
            <p><Link to={`/products/${product.id}`}>{product.title}</Link> </p>
            ))}
           
           
        </div>
    );
};

export default ProductsDetail;