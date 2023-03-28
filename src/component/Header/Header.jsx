import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
      return (
  <div className='w-[100%] h-20 bg-emerald-900 px-24 py-5 flex justify-between items-center'>
            <img src={logo} alt="" />
                 <div className="flex gap-5 text-white">
                   <a className=' hover:text-orange-400' href="/home">Home</a>
                 <a className=' hover:text-orange-400' href="/shop">shop</a>
                   <a className=' hover:text-orange-400' href="/inventory">Inventory</a>
                 <a className=' hover:text-orange-400' href="/login">Login</a>
              </div>
            </div>
            
      );
};

export default Header;