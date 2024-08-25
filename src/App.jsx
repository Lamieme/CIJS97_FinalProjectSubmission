import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AuthProvider from '~/context/AuthContext'
import DiscountProvider from '~/context/DiscountProvider'
import ProductProvider from '~/context/ProductProvider'
import RouteComponent from '~/routes'

function App() {

  return (
    <AuthProvider>
      <ProductProvider>
        <DiscountProvider>
          <RouteComponent />
          <ToastContainer/>
        </DiscountProvider>
      </ProductProvider>
    </AuthProvider>
  )
}

export default App