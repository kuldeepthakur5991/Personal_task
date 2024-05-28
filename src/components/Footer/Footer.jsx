import React from 'react'
import { Grid , Box } from '@mui/material'
import {  Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'
import google from '../../assets/gplay.png'
import app from '../../assets/appstore.png'


const Footer = () => {
  return (
    <>
    <Grid container p={5} style={{display:'flex' , justifyContent:'space-around'}}>
     <Grid item lg={3}>
    <h2>Company</h2>
    <p>About</p>
    <p>Facilities</p>
    <p>Career</p>
    <p>Contact Us</p>
    <p>Terms & Conditions</p>
    <p>Refund Policy</p>
    <p>Privacy Policy</p>
     </Grid>
     <Grid item lg={3}>
        <h2>Activities</h2>
        <p>Art Gallery</p>
        <p>Workshops</p>
        <p>Outdoor Activities</p>
        <p>Media Coverage</p>
        <p>Art Events</p>
        <p>Exhibition</p>
        <p>Daily Activities</p>

        </Grid>
        <Grid item lg={3}>
        <h2>Popular Course</h2>
        <p>Diploma In Fine Arts</p>
        <p>Certificate Hobby Course</p>
        <p>Entrance Preparation</p>
        <p>BFA</p>
        <p>Animation Sketching</p>
        <p>Kids Diploma</p>

        </Grid>
        <Grid item lg={3}>
        <h2>Our Locations</h2>
        <p>Gurgaon (Dlf Phase - 4)</p>
        <p>Mumbai (Andheri West) </p>
        <p>South Delhi (Kailash Colony)</p>
        <h2>International Branches</h2>
        <p>London</p>
        <p>USA</p>
        <p>Dubai, UAE</p>
        </Grid>
    </Grid>
    <Grid container p={5} style={{display:'flex', justifyContent:'space-between'}}>
     <Grid item>
       <h2>NIFA Is A Unit Of Nifaedutech Pvt Ltd.</h2>
       <h3>Connect With Us</h3>
       <h4>9555112200,9810130552</h4>
       <h5>admission@nifafinearts.com</h5>
       <Facebook style={{marginRight:'20px'}}/>
       <Twitter style={{marginRight:'20px'}}/>
       <Instagram style={{marginRight:'20px'}}/>
       <YouTube style={{marginRight:'20px'}}/>
     </Grid>
    
   

     <Grid item >
       <h2>Download The App.</h2>
       <Box style={{display:'flex', justifyContent:'center'}}>
      <img src={google} alt='googleplay' style={{width:'200px'}}/>
      <img  src={app} alt='apple'style={{width:'200px'}} />
       </Box>
       <h5>© Copyright 2021 NIFA Fine Arts. All Rights Reserved.</h5>
     </Grid>
     

    </Grid>
    </>
  )
}

export default Footer