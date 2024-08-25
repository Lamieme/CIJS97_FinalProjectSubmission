import { Container } from '@mui/material'
import { useCallback, useState } from 'react'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import AppBar from '~/components/AppBar'
import Cart from '~/components/Cart/Cart'
import Footer from '~/components/Footer'
import ProductDetail from '~/components/ProductDetail/ProductDetail'
import NotFound from '~/pages/NotFounds'
import { privateRoutes, publicRoutes } from '~/routes/routes'

const Layout = () => (
  <Container disableGutters maxWidth={false} sx={{ display: 'flex', flexDirection: 'column' }}>
    <AppBar />
    <Container maxWidth={'xl'} disableGutters sx={{ height: '100%' }}>
      <Outlet />
    </Container>
    <Footer />
  </Container>
)

const RouteComponent = () => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = useCallback((product) => {
    setCartItems((prevItems) => {
      const exist = prevItems.find((x) => x.id === product.id)
      if (exist) {
        return prevItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      } else {
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }, [])

  const removeFromCart = useCallback((product) => {
    setCartItems((prevItems) => {
      const exist = prevItems.find((x) => x.id === product.id)
      if (exist.quantity === 1) {
        return prevItems.filter((x) => x.id !== product.id)
      } else {
        return prevItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      }
    })
  }, [])

  const enhancedRoutes = [...publicRoutes, ...privateRoutes].map((route) => {
    const Page = route.component
    return {
      path: route.path,
      element: <Page addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} />
    }
  })

  const router = createBrowserRouter([
    { path: '/', element: <Navigate to='/product' /> },
    {
      path: '/',
      element: <Layout />,
      children: [
        ...enhancedRoutes,
        {
          path: '/cart',
          element: (
            <Cart
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          )
        },
        {
          path: '/product/:id',
          element: (
            <ProductDetail
              addToCart={addToCart}
            />
          )
        }
      ]
    },
    { path: '*', element: <NotFound /> }
  ])

  return <RouterProvider fallbackElement={<Outlet />} router={router} />
}

export default RouteComponent
