import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
      
      const {id,img,name,price,seller,category,ratings}= props.product
      const handelAddToCart = props.handelAddToCart;
    
      return (
      
                 <div className="card w-[100%] bg-base-100 shadow-2xl border-2">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-start text-center">
    <h2 className="card-title">{name}</h2>
    <h2 className="card-title">price: ${price}</h2>
    <p>Manufacturer:  {seller} </p>
    <p>Ratings: {ratings} stars</p>
    <button onClick={()=>handelAddToCart(props.product)} className="btn btn-block bg-red-400 w-[100%]">Add to cart  <FontAwesomeIcon icon={faCartShopping} /></button>
  </div>
            </div>
      );
};

export default Product;