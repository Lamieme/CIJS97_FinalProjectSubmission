import AboutPage from '~/pages/AboutPage'
import Board from '~/pages/Boards'
import CheckoutPage from '~/pages/CheckoutPage'
import ContactPage from '~/pages/ContactPage'
import NotFound from '~/pages/NotFounds'
import Product from '~/pages/Products'
import Profiles from '~/pages/Profiles'
import Wishlist from '~/pages/Wishlist'

// Public routes
const publicRoutes = [
  { path: 'product', component: Product },
  { path: 'about', component: AboutPage },
  { path: 'login', component: Board },
  { path: 'profiles', component: Profiles },
  { path: 'not-found', component: NotFound },
  { path: 'checkout', component: CheckoutPage },
  { path: 'contact', component: ContactPage },
  { path: 'wishlist', component: Wishlist }
]

// Private routes
const privateRoutes = [
  // Add private routes here if any
]

export { privateRoutes, publicRoutes }

