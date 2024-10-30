import React from 'react';
import { useNavigate } from 'react-router-dom';

const Aboutpage = () => {
  
  const navigate = useNavigate();
  const goToHome = ()=>{
    navigate('/')
  };

  return (
    <div>
      <h1>어바웃페이지</h1>
      <button onClick={goToHome}>GO HOME</button>
    </div>
  )
}

export default Aboutpage
