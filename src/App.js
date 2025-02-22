import { useState } from 'react';

import './App.css';

import {Routes, Route, Navigate} from "react-router-dom";
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';

function App() {
  
  const [authorize,setAuthorize] = useState(true);

  //컴포넌트
  const PrivateRoute = ()=>{
    return authorize == true ? <UserPage/>:<Navigate to="/login"/>;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/about" element={<Aboutpage />}/>
        <Route path="/products" element={<ProductPage />}/>
        <Route path="/products/:id" element={<ProductDetailPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/user" element={<PrivateRoute />}/>
      </Routes>
    </div>
  );
}

export default App;
