import React, { useEffect } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutCartThunk, getcartThunk } from '../store/slices/cart.slice';



const Cart = ({show, handleClose}) => {
   const dispatch = useDispatch();
   
   const cart = useSelector(state => state.cart)

   useEffect (() => {
    dispatch(getcartThunk()) 
   }, [])
  
  return (

        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
         <h1>shopping cart</h1>
       
         {cart.map(product => (
          <div>
           <li  >
            {product.createdAt} <br />
            {product.title} <br />
             {product.brand}<br />
             Price: {product.price} 
            
           </li>
            
          </div>

         ))}
          <Button onClick={() => dispatch(checkoutCartThunk())}>
            Checkout 
            </Button>
        </Offcanvas.Body>
      </Offcanvas>
    );
};

export default Cart;