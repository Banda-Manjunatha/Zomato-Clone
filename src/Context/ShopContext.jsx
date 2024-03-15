import React, { createContext, useState, useEffect } from 'react'
import allProduct from '../pages/RestaurentData';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let i=0; i<allProduct.length+1; i++){
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {    
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]); 

    const addToCart = async (itemId) => {
        try {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] ? prev[itemId] + 1 : 1 }));
            alert('Order placed successfully');
        } catch (error) {
            console.error('Error eccured while adding to the cart', error)
        }        
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1  }))
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const i in cartItems) {
          if (cartItems[i] > 0) {
            let itemInfo = allProduct.find((product) => product._id === Number(i));
            totalAmount += itemInfo.new_price * cartItems[i];
          }
        }
        return totalAmount;
    }
    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const i in cartItems){
            if(cartItems[i] > 0){
                totalItem += cartItems[i];
            }
        }
        return totalItem;
    }
    

    const contextValue = {getTotalCartItems, getTotalCartAmount, allProduct, cartItems, addToCart, removeFromCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;;