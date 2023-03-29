import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';


const Products = () => {
      const [products, setProducts] = useState([]);
      const [cart, setCart] = useState([]);
      useEffect(()=>{
            fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res =>res.json())
            .then(data =>setProducts(data))
      },[]);

      const handelAddToCart =(product)=>{
            const newCat = [...cart, product];
            setCart(newCat);
      }
      return (
            <div className='flex justify-between'>
                  <div className='grid grid-cols-3 gap-5 py-20 mx-5'>
                        {
                           products.map(product => <Product
                              product ={product}
                              key={product.id}
                              handelAddToCart={handelAddToCart}
                           ></Product>)   
                        }
                  </div>
                  <div className='w-[40%] bg-red-300'>
                        <Cart cart={cart}></Cart>
                       
                  </div>
                  
            </div>
      );
};

export default Products;