import React from 'react'
import CartItems from '../Components/CartItems'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Cart = () => {
  return (
    <>
        <div className='mainCart'>
            <Header/>
            <CartItems />
            <Footer />
        </div>
    </>
  )
}

export default Cart