import React, { useContext } from 'react'
import '../styles/Nearby.css';
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';

const Nearby = () => {
    const {allProduct} = useContext(ShopContext);
    const slicedData = allProduct.slice(12,18);

  return (
    <div className='nearby'>
        <div className="restaurents-container">
            <h2>Near By Restaurents For You</h2>
            <div className="card-container">
              {slicedData.map((data, index) => (
                <div className="card-box" key={index}>
                    <Link to={`/product/${data._id}`} onClick={window.scrollTo(0,0)}>
                        <div className="card-inbox">
                            <div className="card-image">
                                <img src={data.Image} alt="image" className="foodImg"/>
                            </div>
                            <div className="card-name">
                            <p>{data.name}</p>
                            <div className="rating">
                                <span className="rating">{data.rating}</span>
                                <img
                                src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1709401614/star_ehk049.png"
                                alt="star"
                                />
                            </div>
                            </div>
                            <div className="special">
                            <p className="special-name">{data.special}</p>
                            <p>{data.new_price}</p>
                            </div>
                            <div className="card-time">
                            <p>{data.time}</p>
                            </div>
                            <hr />
                            <div className="safety">
                            <img
                                src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1709400688/safety_pjq57b.webp"
                                alt="safety"
                            />
                            <p>
                                Follows all Max Safety measures to ensure your food
                                is safe
                            </p>
                            </div>
                        </div>
                    </Link>
                </div>
              ))}
            </div>
          </div>
    </div>
  )
}

export default Nearby