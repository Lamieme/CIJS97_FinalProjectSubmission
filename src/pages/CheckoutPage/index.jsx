import React from 'react'

function index() {
  return (
    <>
      <link rel="stylesheet" href="src\assets\styles\CheckoutPageStyles.css" />
      <div className="container">
        <nav className="breadcrumb">
          <a href="#">Account</a> /<a href="#">My Account</a> /
          <a href="#">Product</a> /<a href="#">View Cart</a> /<span>CheckOut</span>
        </nav>
        <div className="checkout">
          <div className="billing-details">
            <h2>Billing Details</h2>
            <form>
              <label>First Name*</label>
              <input type="text" required="" />
              <label>Company Name</label>
              <input type="text" />
              <label>Street Address*</label>
              <input type="text" required="" />
              <label>Apartment, floor, etc. (optional)</label>
              <input type="text" />
              <label>Town/City*</label>
              <input type="text" required="" />
              <label>Phone Number*</label>
              <input type="text" required="" />
              <label>Email Address*</label>
              <input type="email" required="" />
              <label className="save-info">
                <input type="checkbox" id="save-info" />
                Save this information for faster check-out next time
              </label>
            </form>
          </div>
          <div className="order-summary">
            <div className="products">
              <div className="product-item">
                <img src="src\pages\CheckoutPage\path_to_image_of_gamepad.png" alt="LCD Monitor" />
                <span>LCD Monitor</span>
                <span className="price">$650</span>
              </div>
              <div className="product-item">
                <img src="src\pages\CheckoutPage\path_to_image_of_gamepad.png" alt="H1 Gamepad" />
                <span>H1 Gamepad</span>
                <span className="price">$1100</span>
              </div>
            </div>
            <div className="summary">
              <div className="line-item">
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>
              <div className="line-item">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="line-item total">
                <span>Total:</span>
                <span>$1750</span>
              </div>
            </div>
            <div className="payment-methods">
              <label>
                <input type="radio" name="payment-method" defaultValue="bank" />
                Bank
              </label>
              <img src="src\pages\CheckoutPage\path_to_bank_icons.png" alt="Bank Icons" />
              <label>
                <input type="radio" name="payment-method" defaultValue="cash" />
                Cash on delivery
              </label>
            </div>
            <div className="coupon">
              <input type="text" placeholder="Coupon Code" />
              <button>Apply Coupon</button>
            </div>
            <button className="place-order">Place Order</button>
          </div>
        </div>
      </div>
    </>

  )
}

export default index
