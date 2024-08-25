import RectangleIcon from '@mui/icons-material/Rectangle'
import { Box, Card, CardActionArea, CardContent, CardMedia, Rating, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MOCK_PRODUCTS } from '~/contants'

const flashSales = MOCK_PRODUCTS.filter(product => product.category === 'Flash Sales')
const bestSellingProducts = MOCK_PRODUCTS.filter(product => product.category === 'Best Selling Products')
const ourProducts = MOCK_PRODUCTS.filter(product => product.category === 'Our Products')


function ProductContent() {
  const [value] = React.useState(2)

  const renderProducts = (products) => {
    return products.map((product) => (
      <Card key={product.id} sx={{ width: 320, height: 350 }}>
        <CardActionArea component={Link} to={`/product/${product.id}`}>
          <CardMedia component="img" height="200" image={product.image} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {product.name}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body2" color="text.secondary">
                {product.price}
              </Typography>
              {product.originalPrice && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textDecoration: 'line-through' }}
                >
                  {product.originalPrice}
                </Typography>
              )}
            </Box>
            <Box sx={{ '& > legend': { mt: 2 } }}>
              <Rating name="read-only" value={value} readOnly />
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    ))
  }

  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <RectangleIcon sx={{ marginRight: '8px', color: '#DB4444', marginTop: '50px' }} />
          <Typography sx={{ fontWeight: '700', fontSize: '30px', color: '#DB4444', marginTop: '50px' }}>
            Today&apos;s
          </Typography>
        </Box>
        <Typography sx={{ fontWeight: '700', fontSize: '30px', marginTop: '10px' }}>
          Flash Sales
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'start',
            marginTop: '30px',
            gap: 15
          }}
        >
          {renderProducts(flashSales)}
        </Box>
      </Box>

      <Box sx={{ position: 'relative' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <RectangleIcon sx={{ marginRight: '8px', color: '#DB4444' }} />
          <Typography sx={{ fontWeight: '700', fontSize: '30px', color: '#DB4444' }}>
            This Month
          </Typography>
        </Box>
        <Typography sx={{ fontWeight: '700', fontSize: '30px', marginTop: '10px' }}>
          Best Selling Products
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'start',
            marginTop: '30px',
            gap: 15
          }}
        >
          {renderProducts(bestSellingProducts)}
        </Box>
      </Box>

      <Box sx={{ position: 'relative' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '50px' }}>
          <RectangleIcon sx={{ marginRight: '8px', color: '#DB4444' }} />
          <Typography sx={{ fontWeight: '700', fontSize: '30px', color: '#DB4444' }}>
            Our Products
          </Typography>
        </Box>
        <Typography sx={{ fontWeight: '700', fontSize: '30px', marginTop: '10px' }}>
          Explore Our Products
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'start',
            marginTop: '30px',
            gap: 15,
            flexWrap: 'wrap'
          }}
        >
          {renderProducts(ourProducts)}
        </Box>
      </Box>
    </Box>
  )
}

export default ProductContent
