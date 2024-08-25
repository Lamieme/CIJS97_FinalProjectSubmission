import React from 'react'
import { useState } from 'react'
import BrowseByCategory1 from '../img/BrowseByCategory1.png' 
import BrowseByCategory2 from '../img/BrowseByCategory2.png'
import BrowseByCategory3 from '../img/BrowseByCategory3.png'
import BrowseByCategory4 from '../img/BrowseByCategory4.png'
import BrowseByCategory5 from '../img/BrowseByCategory5.png'
import BrowseByCategory6 from '../img/BrowseByCategory6.png'
import BBC from './BBC'


function BrowseByCategory() {
    const [selectedCategory, setSelectedCategory] = useState([
    {
        id: 1,
        name: 'Phones',
        icon: BrowseByCategory1
    },
    {
        id: 2,
        name: 'Computers',
        icon: BrowseByCategory2
    },
    {
        id: 3,
        name: 'SmartWatch',
        icon: BrowseByCategory6
    },
    {
        id: 4,
        name: 'Camera',
        icon: BrowseByCategory4
    },
    {
        id: 5,
        name: 'HeadPhones',
        icon: BrowseByCategory5
    },
    {
        id: 6,
        name: 'Gaming',
        icon: BrowseByCategory3
    },
    
])
  return (
    <div style ={{display:'flex',}}>
        <BBC name={selectedCategory[0].name} icon={selectedCategory[0].icon}/>
        <BBC name={selectedCategory[1].name} icon={selectedCategory[1].icon}/>
        <BBC name={selectedCategory[2].name} icon={selectedCategory[2].icon}/>
        <BBC name={selectedCategory[3].name} icon={selectedCategory[3].icon}/>
        <BBC name={selectedCategory[4].name} icon={selectedCategory[4].icon}/>
        <BBC name={selectedCategory[5].name} icon={selectedCategory[5].icon}/>
    </div>
  )
}

export default BrowseByCategory