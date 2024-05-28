import { Button, Typography, Grid, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {

  return (
    <>
      <Grid container>
        <Grid item >
          <Typography variant='h4' textAlign={'center'}
            sx={{ fontWeight: "bold", paddingTop: "20px" }}
          >
            Welcome! To our Food Zone
          </Typography>
          <Typography variant='body1' paragraph p={5}
            sx={{ textAlign: "justify" }}
          >
            Welcome to Culinary Delights, your ultimate destination for exploring the rich and diverse world of food! Whether you're a seasoned chef, an enthusiastic home cook, or simply someone who loves to indulge in culinary experiences, you've come to the right place. Our food page is designed to inspire and ignite your passion for cooking and eating by offering a treasure trove of recipes, cooking tips, and food stories from around the globe.
            Dive into our extensive collection of recipes, where you'll find everything from quick and easy weeknight dinners to elaborate gourmet dishes. Our step-by-step guides and video tutorials make cooking accessible and enjoyable for everyone, regardless of skill level. Discover the secrets of international cuisines, learn about the latest food trends, and get expert advice on everything from kitchen tools to ingredient substitutions.
            Join our vibrant community of food lovers by sharing your own recipes, tips, and culinary creations. Connect with fellow food enthusiasts, participate in exciting cooking challenges, and stay updated with our blog, featuring interviews with renowned chefs, restaurant reviews, and food-related news.
            Welcome to Culinary Delights—where every bite is a journey, and every meal is a celebration. Let's cook, eat, and celebrate the joy of food together!
          </Typography>

          <Box style={{ display: 'flex', justifyContent: 'center', alignItem: 'center' }}>
            <Button variant='contained'>
              <Link to='/food' style={{ textDecoration: 'none', color: 'white' }} >
                Click Me
              </Link>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  )

}

export default Menu