import ProductCard from './ProductCard'  
import IMGProduct1 from '../img/IMGProduct1.png'
import IMGProduct2 from '../img/IMGProduct2.png'
import IMGProduct3 from '../img/IMGProduct3.png'
import IMGProduct4 from '../img/IMGProduct4.png'
import IMGStar1 from '../img/IMGStar1.png'
import IMGStar2 from '../img/IMGStar2.png'
import IMGStar3 from '../img/IMGStar3.png'
import IMGStar4 from '../img/IMGStar4.png'
import React from 'react'
import { useState } from 'react'

function ProductComponents() {
    const [product, setProduct] = useState([{
        id: 1,
        Img: IMGProduct1,
        name: 'HAVIT HV-G92 Gamepad',
        FirstPrice: '$116',
        LastPrice: '$120',
        star: IMGStar1
    },
    {  
        id: 2,
        Img: IMGProduct2,
        name: 'AK-900 Wired Keyboard',
        FirstPrice: '$1160',
        LastPrice: '$960',
        star: IMGStar2
    },
    {
        id: 3,
        Img: IMGProduct3,
        name: 'IPS LCD Gaming Monitor',
        FirstPrice: '$400',
        LastPrice: '$370',
        star: IMGStar3
    },
    {  
        id: 4,
        Img: IMGProduct4,
        name: 'S-Series Comfort Chair ',
        FirstPrice: '$400',
        LastPrice: '$375',
        star: IMGStar4
    
    },
    {
        id: 5,
        Img: IMGProduct4,
        name: 'S-Series Comfort Chair',
        FirstPrice: '$400',
        LastPrice: '$375',
        star: IMGStar4
    }
    ])
  return (
    <div className="Product" style ={{display:'flex',}}>
        <ProductCard name={product[0].name} Img={product[0].Img} FirstPrice={product[0].FirstPrice} LastPrice={product[0].LastPrice} star={product[0].star} />
        <ProductCard name={product[1].name} Img={product[1].Img} FirstPrice={product[1].FirstPrice} LastPrice={product[1].LastPrice} star={product[1].star}/>
        <ProductCard name={product[2].name} Img={product[2].Img} FirstPrice={product[2].FirstPrice} LastPrice={product[2].LastPrice} star={product[2].star}/>
        <ProductCard name={product[3].name} Img={product[3].Img} FirstPrice={product[3].FirstPrice} LastPrice={product[3].LastPrice} star={product[3].star}/>
        <ProductCard name={product[4].name} Img={product[4].Img} FirstPrice={product[4].FirstPrice} LastPrice={product[4].LastPrice} star={product[4].star} />
    </div>
  )
}

export default ProductComponents