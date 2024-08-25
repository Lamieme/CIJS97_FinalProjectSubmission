import { createContext, useContext, useState } from 'react'
import { MOCK_PRODUCTS } from '~/contants'
const ProductContext = createContext()


export const useProducts = () => useContext(ProductContext)

const ProductProvider = ({ children }) => {
//   const [products] = useState([
//     {
//       id: 1,
//       Img: IMGProduct1,
//       name: 'HAVIT HV-G92 Gamepad',
//       FirstPrice: '$116',
//       LastPrice: '$120',
//       star: IMGStar1
//     },
//     {
//       id: 2,
//       Img: IMGProduct2,
//       name: 'AK-900 Wired Keyboard',
//       FirstPrice: '$1160',
//       LastPrice: '$960',
//       star: IMGStar2
//     },
//     {
//       id: 3,
//       Img: IMGProduct3,
//       name: 'IPS LCD Gaming Monitor',
//       FirstPrice: '$400',
//       LastPrice: '$370',
//       star: IMGStar3
//     },
//     {
//       id: 4,
//       Img: IMGProduct4,
//       name: 'S-Series Comfort Chair',
//       FirstPrice: '$400',
//       LastPrice: '$375',
//       star: IMGStar4
//     }
//   ])
  const [products] = useState(MOCK_PRODUCTS)


  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider