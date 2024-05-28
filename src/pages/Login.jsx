import { Button, Card, CardContent, Grid, TextField, Typography,Box } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    const [data,setData] = useState([]);
    const [inpval,setInpval] = useState({
        name : "",
        email: "",
        password: ""
    });

    const getData = (e) =>{
        // console.log(e.target.value)
        const {value, name} = e.target;
        // console.log(value,name)

        setInpval(()=>{
            return {
                ...inpval,
                [name]:value
            }
        })

    }

    const addData =(e) =>{
        e.preventDefault();

        const {name,email,password} = inpval;

        if(name === ""){
            alert("name field is required")
        }else if(email === ""){
            alert("email field is required")
        }else if(!email.includes("@")){
            alert("enter valid email address")
        }else if(password === ""){
            alert("password field is required")
        }else if(password.length < 6){
            alert("password length greater than 6")
        }else {
            console.log("data successfully saved")
            console.log(inpval);
            localStorage.setItem("userCredential",JSON.stringify(...data,inpval));

        }
    }
  return (
    <Grid container style={{ display:'flex',justifyContent:'center' , alignItems:'center', height:'100vh'}}>
    <Grid item lg={3} >
     <Card>
        <CardContent>
            <Typography>Login Yourself Here!</Typography>
            <Box mt={2}>
                <TextField variant='outlined' name="name" value={inpval.name} onChange={getData} placeholder='Enter Your Name' fullWidth  />
            </Box>
            <Box mt={2}>
                <TextField variant='outlined' name="email" value={inpval.email} onChange={getData} placeholder='Enter Your Email' fullWidth />
            </Box>
            <Box mt={2}>
                <TextField variant='outlined' name="password" value={inpval.password} onChange={getData} placeholder='Enter your Password' fullWidth />
            </Box>
            <Button onClick={addData}>Login</Button>
            <Typography>Register here <Link to='/signup'>Register</Link></Typography>
        </CardContent>
     </Card>
    </Grid>
   </Grid>
  )
}

export default LoginForm