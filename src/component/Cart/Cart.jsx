import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan,faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart}) => {

let total = 0;
let shipping = 0;
for (const product of cart){
  total= total + product.price;
  shipping = shipping + product.shipping;
}
let tax = total*(7/100);
let grandTotal = total + shipping + tax;


      return (
                <div className="fixed top-50 right-5"> 
                        <h1 className='text-2xl text-center font-bold py-2'>Order summary</h1>
                        <hr />
                        <h1 className='text-1xl text-start font-bold py-4'>Selected Item:{cart.length} </h1>
                        <hr />
                        <h1 className='text-1xl text-start font-bold py-4'>Total Price:{total}</h1>
                        <hr />
                      <h1 className='text-1xl text-start font-bold py-4'>Shipping:{shipping} </h1>
                      <hr />
                        <h1 className='text-1xl text-start font-bold my-2'>Tax:{tax.toFixed(2)} </h1>
                        <hr />
                        <h1 className='text-1xl text-start font-bold py-4'>Grand Total:{grandTotal} </h1>
                        <hr />
                        <button className="btn btn-success my-5">Clear cart <FontAwesomeIcon icon={faTrashCan} /></button>
                        <hr />
<br />
<button className='btn btn-success mb-5'>Retrive Order <FontAwesomeIcon icon={faArrowRight} />
</button>
<hr />
 </div>  
            
      );
};

export default Cart;