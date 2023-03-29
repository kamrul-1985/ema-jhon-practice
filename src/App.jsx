import React from 'react';
import Header from './component/Header/Header';
import Products from './component/Products/Products';


const App = () => {
  return (
    <div className='bg-red-100'>
      <Header></Header>
      <h1 className='text-4xl text-center font-bold my-5'>Let's Choose Your Favourate</h1>
      <Products></Products>
    </div>
  );
};

export default App;
