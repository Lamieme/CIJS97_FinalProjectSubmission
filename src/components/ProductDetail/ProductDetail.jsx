import { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useProducts } from '../../context/ProductProvider'
import PDT1 from '../img/PDT1.png'
import ProductList from '../ProductList/ProductList'
import './ProductDetail.css'
const ProductDetail = ({ addToCart }) => {
  const { id } = useParams()
  const products = useProducts()
  const location = useLocation()
  const product = products.find((p) => p.id === parseInt(id))

  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState('')
  const colors = ['Red', 'Blue', 'Black', 'White'] // Màu sắc có thể chọn
  // useEffect(() => {
  //   window.location.reload();
  // }, []);
  // useEffect(() => {
  //   const queryParams = new URLSearchParams(location.search);
  //   if (queryParams.get('reload')) {
  //     window.location.replace(window.location.pathname); // Reload trang mà không có query params
  //   }
  // }, [location]);


  if (!product) {
    return <div>Product not found</div>
  }

  const handleAddToCart = () => {
    const productWithDetails = {
      ...product,
      quantity,
      selectedColor
    }
    addToCart(productWithDetails)
  }
  return (
    <div>
      {/* <h2>{product.name}</h2>
      <img src={product.Img} alt={product.name} />
      <p>Price: {product.LastPrice}</p>
      <p>Original Price: {product.FirstPrice}</p>
      <img src={product.star} alt="rating" /> */}
      <div className="ProductDetail">
        <div className="Left">
          <img src={product.image} alt="" />
        </div>
        <div className="Right">
          <h1>{product.name}</h1>
          <img src={product.star} alt="" />
          <div className="Price">
            <span>{product.LastPrice}</span>
            <span className="lastPrice">{product.FirstPrice}</span>
          </div>
          <p className='Infor'>This is one of the good products that suits your purpose and is at a very good price. Buy it now to be one of the earliest users of our product.</p>
          <div className='color'>
            <h4>Choose Color:</h4>
            < div style={{ display: 'flex', gap: '10px' }}>
              {colors.map((color) => (
                <div
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: color.toLowerCase(),
                    border: selectedColor === color ? '3px solid black' : '2px solid lightgray',
                    cursor: 'pointer'
                  }}
                />
              ))}
            </div>
          </div>
          <div className="Bnt">
            <div className='Quantity'>
              <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <Link to='/cart'>
              <button className='Block' onClick={handleAddToCart}>Buy Now</button>
            </Link>
          </div>
          <img src={PDT1} alt="" />
        </div>
      </div>
      <div className="RelatedItem">
        <div className="Heading">
          <div className="box">
          </div>
          <div className="Text">
            <h6>Related Item</h6>
          </div>
        </div>
        <ProductList products={products} addToCart={addToCart} />
      </div>
    </div>
  )
}
export default ProductDetail