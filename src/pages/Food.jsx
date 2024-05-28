import React, { useContext } from 'react'
import burger from '../assets/burger.jpeg'
import pepsi from '../assets/pepsi.jpeg'
import coke from '../assets/coke.jpeg'
import fries from '../assets/fries.jpeg'
import { Grid, Card, Button, Typography, CardContent } from '@mui/material'
import Navbar from '../components/Navbar/Navbar'
import { FoodShoppingContext } from '../Context/FoodShoppingContext'

let items =
    [
        {
            "name": "Hamburger",
            "price": 200,
            "image": burger
        },
        {
            "name": "Fries",
            "price": 100,
            "image": fries
        },
        {
            "name": "Coke",
            "price": 50,
            "image": coke
        },
        {
            "name": "Pepsi",
            "price": 50,
            "image": pepsi
        }
    ]

const Food = () => {
    const { cart, setCart } = useContext(FoodShoppingContext);

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    return (
        <>
            <Navbar />
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant='h5'
                        sx={{ fontWeight: "bold", padding: "28px 0px", textAlign: "center" }}
                    >
                        Welcome! To our Food Zone
                    </Typography>
                    <Typography variant='body1' paragraph
                        sx={{ textAlign: "start" }}
                    >
                        Welcome to Culinary Delights, your ultimate destination for exploring the rich and diverse world of food! Whether you're a seasoned chef, an enthusiastic home cook, or simply someone who loves to indulge in culinary experiences, you've come to the right place. Our food page is designed to inspire and ignite your passion for cooking and eating by offering a treasure trove of recipes, cooking tips, and food stories from around the globe.

                    </Typography>
                </Grid>
                {
                    items?.map((item, id) => (
                        <>
                            <Grid item lg={3} md={4} sm={6} xs={12}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }} >
                                <Card
                                    style={{
                                        margin: '10px', height: '300px'
                                    }}>
                                    <CardContent>
                                        <Typography key={id}
                                            sx={{
                                                textAlign: "center",
                                                fontWeight: "bold",
                                                paddingBottom: "20px"
                                            }}>
                                            {item?.name}
                                        </Typography>
                                        <img src={item?.image}
                                            style={{
                                                height: '120px', width: '100%'
                                            }} alt='product' />

                                        <Button variant='outlined' fullWidth
                                            sx={{
                                                border: '0px', color: '#000', fontWeight: 'bold',
                                                cursor: "inherit",
                                                '&:hover': {
                                                    border: '0px',
                                                    background:"#fff"
                                                },
                                            }}
                                        >
                                            ₹ {item?.price}
                                        </Button>

                                        <Button variant='outlined' fullWidth className="add_to_cart"
                                            onClick={() => addToCart(item)}
                                            sx={{
                                                marginTop: '10px', border: '1px solid #812868', color: '#812868', fontWeight: 'bold',
                                                '&:hover': {
                                                    background: 'linear-gradient(90deg, #812868 0%, #f954a4 100%)',
                                                    color: '#fff',
                                                    border: '0px'
                                                },
                                            }}>
                                            Add to cart
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </>
                    ))
                }
            </Grid>
        </>
    )
}

export default Food