import { Container } from '@mui/material'
import ProductBar from './ProductBar'
import ProductContent from './ProductContent'

function Products() {
  return (
    <Container disableGutters maxWidth={'xl'} sx={{ display: 'flex', flexDirection: 'column', my: 6 }}>
      <ProductBar />
      <ProductContent />
    </Container>
  )
}

export default Products
