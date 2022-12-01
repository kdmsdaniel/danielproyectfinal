import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPuchesesThunk } from '../store/slices/pucheses.slice';

const Purcheses = () => {

    const dispatch = useDispatch();

    const purcheses = useSelector(state => state.pucheses);

    useEffect(() => {
        dispatch(getPuchesesThunk());
    }, [])

    return (
        <div>
            <h1>Purcheses</h1>
            <ul>
                {
                    purcheses.map(purchese => (
                        
                        <li >
                            {purchese.cart.products.map(product =>(
                             <li>
                            <Link to={`/products/${purchese.cart.products}`} >  
                              <h3>Product: {product.title}</h3>
                                <h3>price: {product.price}</h3>
                                <h3>Purchase Date: {product.createdAt}</h3>
                              </Link>
                             </li>

                            ))}

                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Purcheses;