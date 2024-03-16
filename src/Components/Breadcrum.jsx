import React from 'react'
import '../styles/Breadcrum.css'
import { Link } from 'react-router-dom';

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
       <div className='container'>
       <Link to='/home' className='link-bread'>Home</Link> <img src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1709533333/breadcrum_arrow_lam5pa.png" alt="" /> {product.name}
       </div>
    </div>
  )
}

export default Breadcrum