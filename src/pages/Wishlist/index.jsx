import React from 'react'

function index() {
  return (
    <>
      <link rel="stylesheet" href="src\assets\styles\WishlistStyles.css" />
      <div className="container">
        <div className="wishlist">
          {/* Header section for Wishlist */}
          <div className="wishlist-header">
            <h2>Wishlist (4)</h2>
            <button className="move-all">Move All To Bag</button>
          </div>
          <div className="wishlist-items">
            <div className="item">
              <div className="discount-badge">-35%</div>
              <img src="src\pages\Wishlist\gucci-duffle-bag.png" alt="Gucci duffle bag" />
              <div className="add-to-cart-container">
                <button className="add-to-cart">
                  <img src="src\pages\Wishlist\cart-icon1.png" alt="Cart Icon" /> Add To Cart
                </button>
              </div>
              <div className="product-container">
                <div className="product-title">Gucci duffle bag</div>
                <div className="price">
                  $960 <span>$1160</span>
                </div>
              </div>
              <div className="remove-icon">
                <img src="src\pages\Wishlist\trash-icon.png" alt="Remove" />
              </div>
            </div>
            <div className="item">
              <img src="src\pages\Wishlist\rgb-cpu-cooler.png" alt="RGB liquid CPU Cooler" />
              <div className="add-to-cart-container">
                <button className="add-to-cart">
                  <img src="src\pages\Wishlist\cart-icon1.png" alt="Cart Icon" /> Add To Cart
                </button>
              </div>
              <div className="product-container">
                <div className="product-title">RGB liquid CPU Cooler</div>
                <div className="price">$1960</div>
              </div>
              <div className="remove-icon">
                <img src="src\pages\Wishlist\trash-icon.png" alt="Remove" />
              </div>
            </div>
            <div className="item">
              <img src="src\pages\Wishlist\gamepad.png" alt="GP11 Shooter USB Gamepad" />
              <div className="add-to-cart-container">
                <button className="add-to-cart">
                  <img src="src\pages\Wishlist\cart-icon1.png" alt="Cart Icon" /> Add To Cart
                </button>
              </div>
              <div className="product-container">
                <div className="product-title">GP11 Shooter USB Gamepad</div>
                <div className="price">$550</div>
              </div>
              <div className="remove-icon">
                <img src="src\pages\Wishlist\trash-icon.png" alt="Remove" />
              </div>
            </div>
            <div className="item">
              <img src="src\pages\Wishlist\satin-jacket.png" alt="Quilted Satin Jacket" />
              <div className="add-to-cart-container">
                <button className="add-to-cart">
                  <img src="src\pages\Wishlist\cart-icon1.png" alt="Cart Icon" /> Add To Cart
                </button>
              </div>
              <div className="product-container">
                <div className="product-title">Quilted Satin Jacket</div>
                <div className="price">$750</div>
              </div>
              <div className="remove-icon">
                <img src="src\pages\Wishlist\trash-icon.png" alt="Remove" />
              </div>
            </div>
          </div>
        </div>
        <div className="just-for-you">
          {/* Header section for Just For You */}
          <div className="just-for-you-header">
            <h2 className="section-title">Just For You</h2>
            <button className="see-all">See All</button>
          </div>
          <div className="just-for-you-items">
            <div className="item">
              <div className="discount-badge">-35%</div>
              <img src="src\pages\Wishlist\gaming-laptop.png" alt="ASUS FHD Gaming Laptop" />
              <div className="add-to-cart-container">
                <button className="add-to-cart">
                  <img src="src\pages\Wishlist\cart-icon1.png" alt="Cart Icon" /> Add To Cart
                </button>
              </div>
              <div className="product-container">
                <div className="product-title">ASUS FHD Gaming Laptop</div>
                <div className="price">
                  $960 <span>$1160</span>
                </div>
              </div>
              <div className="ratings">
                <img src="src\pages\Wishlist\star-icon.png" alt="Star" />
                <img src="src\pages\Wishlist\star-icon.png" alt="Star" />
                <img src="src\pages\Wishlist\star-icon.png" alt="Star" />
                <img src="src\pages\Wishlist\star-icon.png" alt="Star" />
                <img src="src\pages\Wishlist\star-icon.png" alt="Star" />
                <span>(65)</span>
              </div>
              <div className="eye-icon">
                <img src="src\pages\Wishlist\eye-icon.png" alt="View" />
              </div>
            </div>
            <div className="item">
              <img src="src\pages\Wishlist\gaming-monitor.png" alt="IPS LCD Gaming Monitor" />
              <div className="add-to-cart-container">
                <button className="add-to-cart">
                  <img src="src\pages\Wishlist\cart-icon.png" alt="Cart Icon" /> Add To Cart
                </button>
              </div>
              <div className="product-container">
                <div className="product-title">IPS LCD Gaming Monitor</div>
                <div className="price">$1160</div>
              </div>
              <div className="ratings">
                <img src="src\pages\Wishlist\star-icon.png" alt="Star" />
                <img src="src\pages\Wishlist\star-icon.png" alt="Star" />
                <img src="src\pages\Wishlist\star-icon.png" alt="Star" />
                <img src="src\pages\Wishlist\star-icon.png" alt="Star" />
                <img src="src\pages\Wishlist\star-icon.png" alt="Star" />
                <span>(65)</span>
              </div>
              <div className="eye-icon">
                <img src="src\pages\Wishlist\eye-icon.png" alt="View" />
              </div>
            </div>
            <div className="item">
              <div className="new-badge">NEW</div>
              <img src="src\pages\Wishlist\havit-gamepad.png" alt="HAVIT HV-G92 Gamepad" />
              <div className="add-to-cart-container">
                <button className="add-to-cart">
                  <img src="src\pages\Wishlist\cart-icon1.png" alt="Cart Icon" /> Add To Cart
                </button>
              </div>
              <div className="product-container">
                <div className="product-title">HAVIT HV-G92 Gamepad</div>
                <div className="price">$560</div>
              </div>
              <div className="ratings">
                <img src="src\pages\Wishlist\star-icon.png" alt="Star" />
                <img src="src\pages\Wishlist\star-icon.png" alt="Star" />
                <img src="src\pages\Wishlist\star-icon.png" alt="Star" />
                <img src="src\pages\Wishlist\star-icon.png" alt="Star" />
                <img src="src\pages\Wishlist\star-icon.png" alt="Star" />
                <span>(65)</span>
              </div>
              <div className="eye-icon">
                <img src="src\pages\Wishlist\eye-icon.png" alt="View" />
              </div>
            </div>
            <div className="item">
              <img src="src\pages\Wishlist\wired-keyboard.png" alt="AK-900 Wired Keyboard" />
              <div className="add-to-cart-container">
                <button className="add-to-cart">
                  <img src="src\pages\Wishlist\cart-icon1.png" alt="Cart Icon" /> Add To Cart
                </button>
              </div>
              <div className="product-container">
                <div className="product-title">AK-900 Wired Keyboard</div>
                <div className="price">$200</div>
              </div>
              <div className="ratings">
                <img src="src\pages\Wishlist\star-icon.png" alt="Star" />
                <img src="src\pages\Wishlist\star-icon.png" alt="Star" />
                <img src="src\pages\Wishlist\star-icon.png" alt="Star" />
                <img src="src\pages\Wishlist\star-icon.png" alt="Star" />
                <img src="src\pages\Wishlist\star-icon.png" alt="Star" />
                <span>(65)</span>
              </div>
              <div className="eye-icon">
                <img src="src\pages\Wishlist\eye-icon.png" alt="View" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default index
