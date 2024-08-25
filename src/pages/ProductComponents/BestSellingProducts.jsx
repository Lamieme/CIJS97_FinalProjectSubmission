import ProductCard from './ProductCard'  
import BSL1 from '../img/BSL1.png'
import BSL2 from '../img/BSL2.png'
import BSL3 from '../img/BSL3.png'
import BSL4 from '../img/BSL4.png'
import BSLStar1 from '../img/BSLStar1.png'
import BSLStar2 from '../img/BSLStar2.png'
import { useState } from 'react'
import React from 'react'
function ProductComponents() {
    const [product, setProduct] = useState([{
        id: 1,
        Img: BSL1,
        name: 'The north coat',
        FirstPrice: '$360',
        LastPrice: '$260',
        star: BSLStar1
    },
    {  
        id: 2,
        Img: BSL2,
        name: 'Gucci duffle bag',
        FirstPrice: '$1160',
        LastPrice: '$960',
        star: BSLStar2
    },
    {
        id: 3,
        Img: BSL3,
        name: 'RGB liquid CPU Cooler',
        FirstPrice: '$170',
        LastPrice: '$160',
        star: BSLStar2
    },
    {  
        id: 4,
        Img: BSL4,
        name: 'Small BookSelf ',
        LastPrice: '$375',
        star: BSLStar1
    
    },
    
    ])
  return (
    <div className="Product" style ={{display:'flex',}}>
        <ProductCard name={product[0].name} Img={product[0].Img} FirstPrice={product[0].FirstPrice} LastPrice={product[0].LastPrice} star={product[0].star} />
        <ProductCard name={product[1].name} Img={product[1].Img} FirstPrice={product[1].FirstPrice} LastPrice={product[1].LastPrice} star={product[1].star}/>
        <ProductCard name={product[2].name} Img={product[2].Img} FirstPrice={product[2].FirstPrice} LastPrice={product[2].LastPrice} star={product[2].star}/>
        <ProductCard name={product[3].name} Img={product[3].Img} LastPrice={product[3].LastPrice} star={product[3].star}/>
    </div>
  )
}

export default ProductComponents