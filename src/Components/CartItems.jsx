import React, { useContext } from 'react'
import '../styles/cartItem.css'
import { ShopContext } from '../Context/ShopContext'

const CartItems = () => {
    const {getTotalCartAmount, allProduct, cartItems, removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartItems'>
        <div className="cartItems-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {allProduct.map((e)=>{
            if(cartItems[e._id] > 0)
            {
                const total = parseInt(e.new_price) * parseInt(cartItems[e._id])
                
                return (
                    <div>
                        <div className="cartItems-format cartItems-format-main" key={e}>
                            <img src={e.Image} alt="" className='cartProduct-image'/>
                            <p>{e.dishName}</p>
                            <p>₹{e.new_price}</p>
                            <button className='cartItems-quantity'>{cartItems[e._id]}</button>
                            <p>₹{total}</p>
                            <img className='removeProduct' src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1709793760/cross_icon_v5xli3.png" onClick={()=>{removeFromCart(e._id)}} alt="" />
                        </div>
                        <hr />
                    </div>
                )
            }
            else {
                return null;
            }
        })}
        <div className="allCart">
            <div className="cart-total">
                <h1>Price Details</h1>
                <div>
                    <div className='cartItems-total-item'>
                        <p>Subtotal</p>
                        <p>₹{getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartItems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartItems-total-item">
                        <h3>Total Amount</h3>
                        <h3>₹{getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>Process To CheckOut</button>
            </div>
        </div>
        <div className="cartitems-promocode">
            <p>If you have any promocode, Enter it here.</p>
            <div className='cartitems-promobox'>
                <input type="text" placeholder='Enter the code'/>
                <button>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default CartItems