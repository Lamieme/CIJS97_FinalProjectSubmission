import { useState } from 'react'
import { useDiscount } from '../../context/DiscountProvider'
import './Cart.css'

const Cart = ({ cartItems, addToCart, removeFromCart }) => {
  const [code, setCode] = useState('')
  const { discount, applyDiscount } = useDiscount()

  const total = cartItems.reduce((sum, item) => sum + item.quantity * parseFloat(item.LastPrice.slice(1)), 0)
  const discountedTotal = total * (1 - discount)
  const handleApplyDiscount = () => {
    applyDiscount(code)
  }

  return (
    <div >
      <div className='Cart'>
        <div className="heading">
          <h2>Product</h2>
          <h2>Price</h2>
          <h2>Quantity</h2>
          <h2>Subtotal</h2>
        </div>
        <div>
          {cartItems.map(item => (
            <div key={item.id} className='Item'>
              <div className="Product">
                <img src={item.image} alt="" style={{ width:'54px', height:'54px' }} />
                <h3>{item.name}</h3>
              </div>
              <div className="Price">
                <p>{item.LastPrice}</p>
              </div>
              <div className="Quantity">
                <button onClick={() => addToCart(item)}>+</button>
                <span className='number'>{item.quantity}</span>
                <button onClick={() => removeFromCart(item)}>-</button>
              </div>
              <div className="Subtotal">
                <p>${(item.LastPrice * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Discount code"
          />
          <button onClick={handleApplyDiscount}>Apply</button>
        </div>
        <h3>Total: ${discountedTotal.toFixed(2)}</h3>
      </div>
    </div>
  )
}

export default Cart