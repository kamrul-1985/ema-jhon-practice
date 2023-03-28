import React from 'react';

const Product = (props) => {
      console.log(props)
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
    <button onClick={()=>handelAddToCart(props.product)} className="btn btn-block bg-red-400 w-[100%]">Add to cart <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
</span> </button>
  </div>
            </div>
      );
};

export default Product;