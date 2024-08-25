import { createContext, useContext, useState } from 'react'

const DiscountContext = createContext()

export const useDiscount = () => useContext(DiscountContext)

const DiscountProvider = ({ children }) => {
  const [discount, setDiscount] = useState(0)

  const applyDiscount = (code) => {
    if (code === 'SAVE10') {
      setDiscount(0.1)
    } else if (code === 'SAVE20') {
      setDiscount(0.2)
    } else {
      setDiscount(0)
    }
  }

  return (
    <DiscountContext.Provider value={{ discount, applyDiscount }}>
      {children}
    </DiscountContext.Provider>
  )
}

export default DiscountProvider