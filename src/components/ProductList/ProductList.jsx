import { Link } from 'react-router-dom'
import './ProductList.css'

const ProductList = ({ products, addToCart }) => {

  return (
    <div style ={{ display:'flex' }}>
      {products.map((product) => (
        <div key={product.id} className='Product'>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt="" />
            <h3>{product.name}</h3>
            <div className="Price">
              <span>{product.LastPrice}</span>
              <span className="lastPrice">{product.FirstPrice}</span>
            </div>
            <img src={product.star} alt="" style={{ width:'140px', height:'20px' }} />
          </Link>
          <button className ='Block'onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}
export default ProductList