import React from 'react'
import New1 from '../img/New1.png'
import New2 from '../img/New2.png'
import New3 from '../img/New3.png'
import New4 from '../img/New4.png'
import './NewArrival.css'

function NewArrival() {
  return (
    <div className='NewArrival'>
        <div className="Array1">
            <img src={New1} alt="" />
            <h1>PlayStation 5</h1>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <a href="">Shop Now</a>
        </div>
        <div className="Array2">
            <div className="Array2Parent">
                <img src={New2} alt="" />
                <h1>Women’s Collections</h1>
                <p>Featured woman collections that give you another vibe.</p>
                <a href="">Shop Now</a>
            </div>
            <div className="Array2Children">
                <div className="Array2Children1">
                    <img src={New3} alt="" />
                    <h1>Speakers</h1>
                    <p>Amazon wireless speakers</p>
                    <a href="">Shop Now</a>
                </div>
                <div className="Array2Children2">
                    <img src={New4} alt="" />
                    <h1>Perfume</h1>
                    <p>GUCCI INTENSE OUD EDP</p>
                    <a href="">Shop Now</a>
                </div>    
            </div>
        </div>

    </div>
  )
}

export default NewArrival