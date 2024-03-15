import React, { useContext, useEffect } from 'react'
import '../styles/ProductDisplay.css'
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
    useEffect(()=>{
        window.scrollTo(0,0);
    }, []);
    
  return (
    <>
    <div className='productDisplay'>
        <div className="product-left">
            <div className="product-img">
                <img src={product.Image} alt="" />
            </div>
        </div>
        <div className="product-right">
            <h1>{product.dishName}</h1>
            <div className='restaurent'>
            <img src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1710405539/png-transparent-buffet-symbol-computer-icons-restaurant-buffet-miscellaneous-logo-sign_huxyzo.png" alt="" /><h3>{product.name}</h3>
            </div>
            <div className='product-star'>
                <img src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1709533328/star_icon_bdhazk.png" alt="" />
                <img src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1709533328/star_icon_bdhazk.png" alt="" />
                <img src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1709533328/star_icon_bdhazk.png" alt="" />
                <img src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1709533328/star_dull_icon_fxtkdi.png" alt="" />
                <img src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1709533328/star_dull_icon_fxtkdi.png" alt="" />{  }<span>({product.rating})</span> 
            </div>
            <div className='delivery-box'><img src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1710406889/icons8-compass-50_psngzp.png" alt="" /><p className='delivery'> Live track your order </p><img src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1710406890/icons8-time-50_hya2n3.png" alt="" /><p>{product.time} time</p></div>
            <p className='dish'><span>Specials : </span>{product.special}</p>
            <p className='price'><span className='old'>₹{product.old_price}</span> <span className='new'>₹{product.new_price}</span></p>
            <button onClick={()=>{addToCart(product._id)}}>Order Now</button>
            <hr />
        </div>
    </div>
    </>

  )
}

export default ProductDisplay