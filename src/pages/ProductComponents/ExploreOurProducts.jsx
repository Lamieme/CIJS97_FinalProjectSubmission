import React from 'react'
import { useState } from 'react'
import EOP1 from '../img/EOP1.png'
import EOP2 from '../img/EOP2.png'
import EOP3 from '../img/EOP3.png'
import EOP4 from '../img/BSL2.png'
import EOP5 from '../img/EOP5.png'
import EOP6 from '../img/EOP6.png'
import EOP7 from '../img/EOP7.png'
import EOP8 from '../img/EOP8.png'
import ProductCard from './ProductCard'
import BSLStar2 from '../img/BSLStar2.png'
import './ExploreOurProducts.css'

function ExploreOurProducts(){
 const [store, setStore] = useState([
    {
        id: 1,
        Img: EOP1,
        name: 'Breed Dry Dog Food',
        LastPrice: '$100', 
        star:BSLStar2
    },
    {
        id: 2,
        Img: EOP2,
        name: 'CANON EOS DSLR Camera',
        LastPrice: '$360',
        star:BSLStar2 
    },
    {
        id: 3,
        Img: EOP3,
        name: 'ASUS FHD Gaming Laptop',
        LastPrice: '$700',
        star:BSLStar2 
    },
    {
        id: 4,
        Img: EOP4,
        name: 'Curology Product Set ',
        LastPrice: '$500',
        star:BSLStar2 
    },
    {
        id: 5,
        Img: EOP5,
        name: 'Kids Electric Car',
        LastPrice: '$960',
        star:BSLStar2 
    },
    {
        id: 6,
        Img: EOP6,
        name: 'Jr. Zoom Soccer Cleats',
        LastPrice: '$1160',
        star:BSLStar2 
    },
    {
        id: 7,
        Img: EOP7,
        name: 'GP11 Shooter USB Gamepad',
        LastPrice: '$660',
        star:BSLStar2 
    },
    {
        id: 8,
        Img: EOP8,
        name: 'Quilted Satin Jacket',
        LastPrice: '$660',
        star:BSLStar2 
    }
 ])

  return (
    <div >
        <div className="" style ={{display:'flex',width:''}}>
        <ProductCard name={store[0].name} Img={store[0].Img} LastPrice={store[0].LastPrice} star={store[0].star}/>
        <ProductCard name={store[1].name} Img={store[1].Img} LastPrice={store[1].LastPrice} star={store[1].star}/>
        <ProductCard name={store[2].name} Img={store[2].Img} LastPrice={store[2].LastPrice} star={store[2].star}/>
        <ProductCard name={store[3].name} Img={store[3].Img} LastPrice={store[3].LastPrice} star={store[3].star}/>
        </div>
        <div className=""style ={{display:'flex',paddingTop:'50px'}}>
        <ProductCard name={store[4].name} Img={store[4].Img} LastPrice={store[4].LastPrice} star={store[4].star}/>
        <ProductCard name={store[5].name} Img={store[5].Img} LastPrice={store[5].LastPrice} star={store[5].star}/>
        <ProductCard name={store[6].name} Img={store[6].Img} LastPrice={store[6].LastPrice} star={store[6].star}/>
        <ProductCard name={store[7].name} Img={store[7].Img} LastPrice={store[7].LastPrice} star={store[7].star}/>
        </div>
        <button>View All Products</button>
    </div>
  )
}

export default ExploreOurProducts