import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'
import { Grid, Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import '../Navbar/Navbar.css'
import { FoodShoppingContext } from '../../Context/FoodShoppingContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { cart } = useContext(FoodShoppingContext)

  return (
    <>
      <Grid container className='navbar' style={{ display: 'flex', justifyContent: 'space-around', gap: '10px' }}>
        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
          <Typography style={{ fontSize: '18px', fontWeight: "bold" }} >Food Zone</Typography>
        </Box>

        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>

          <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', marginLeft: '10px', fontWeight: "bold" }}>

            <li style={{ listStyle: 'none', marginRight: '20px', cursor: 'pointer' }}>ContactUS</li>
            <li style={{ listStyle: 'none', marginRight: '20px', cursor: 'pointer' }}>AboutUS</li>
            <li style={{ listStyle: 'none', marginRight: '20px', cursor: 'pointer' }}>CartPage</li>
          </ul>
        </Box>

        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
          <Facebook />
          <Twitter />
          <Instagram />
          <YouTube />

        </Box>
        {
          cart?.length > 0 &&
          <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
            <Typography>
              <Link to='/foodItem' style={{ color: "#fff", fontWeight: "bold", textDecoration: "none" }}>
                Cart item: {cart?.length}
              </Link>
            </Typography>
          </Box>
        }
      </Grid>
    </>
  )
}

export default Navbar