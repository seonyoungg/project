import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {

  const {id} = useParams();
  console.log('pp');
  
  return (
    <div>
      디테일페이지{id}
    </div>
  )
}

export default ProductDetailPage
