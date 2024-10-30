import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate=useNavigate();
  const goProducts = ()=>{
    navigate('/products?q=skirts')
  };

  return (
    <div>
      <h1>홈페이지</h1>
      <Link to="/about"> Go to about</Link>
      <button onClick={goProducts}>go to products</button>
    </div>
  )
}

export default Homepage
