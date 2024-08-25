import React from 'react'
import './ProductCard.css'

function ProductCard({Img,name,FirstPrice,LastPrice,star}) {
  return (
    <div className='ProductCard'>
        <img src={Img} alt="" />
        <div className="Block">
            <p>Add To Cart</p>
        </div>
        <h3>{name}</h3>
        <div className="Price">
            <span>{LastPrice}</span>
            <span className="lastPrice">{FirstPrice}</span>
        </div>
        <img src={star} alt="" style={{width:'140px', height:'20px'}} />
    
    </div>
  )
}

export default ProductCard