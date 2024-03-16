import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum';
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import ProductDisplay from '../Components/ProductDisplay';
import Nearby from '../Components/Nearby';

const Product = () => {
    const { allProduct } = useContext(ShopContext);
    const { productId } = useParams();

    // Find the product with matching _id
    const product = allProduct.find((e) => e._id === Number(productId));

    // Check if product is found
    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <>
            <Header/>
            <div className='product'>
                <Breadcrum product={product} />
                <ProductDisplay product={product} />
                <Nearby />
            </div> 
            <Footer/>
        </>
    );
};

export default Product;
