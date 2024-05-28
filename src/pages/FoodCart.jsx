import React, { useContext } from 'react'
import { Box, Tooltip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';
import { FoodShoppingContext } from '../Context/FoodShoppingContext';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const FoodCart = () => {
    const { cart, setCart } = useContext(FoodShoppingContext)
    const navigate = useNavigate();

    const removeToCart = (id) => {
        let filterData = cart.filter((elem, indx) => indx !== id)
        setCart(filterData);
    }

    const totalData = cart.reduce((sum, item) => sum + item.price, 0);

    return (

        <Box>
            <h2 style={{ textAlign: 'center' }} >Product Details</h2>
            {cart?.length > 0 ? (
                <Box style={{ marginTop: "50px" }}>
                    <TableContainer component={Paper} style={{ margin: 'auto' }}>
                        <Table style={{ border: "1px solid #F2F2F2" }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ fontSize: '18px', fontWeight: '600' }} >Product</TableCell>
                                    <TableCell style={{ fontSize: '18px', fontWeight: '600', }} >Title</TableCell>
                                    <TableCell style={{ fontSize: '18px', fontWeight: '600', }} >Price</TableCell>
                                    <TableCell style={{ fontSize: '18px', fontWeight: '600', }} >Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cart?.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                            <img src={item.image} alt={item.image} style={{ width: '50px', marginRight: '10px', textAlign: 'center' }} />
                                        </TableCell>
                                        <TableCell style={{ fontSize: '14px' }} >{item.name}</TableCell>

                                        <TableCell style={{ fontSize: '14px' }} >₹ {item.price}</TableCell>
                                        <TableCell >
                                            <DeleteIcon onClick={() => removeToCart(index)}
                                                style={{ cursor: "pointer", color: "red" }}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                                <TableRow >
                                    <TableCell colSpan={2} style={{ fontWeight: "bold" }}>Total</TableCell>
                                    <TableCell colSpan={2} style={{ fontWeight: "bold" }}>₹ {totalData}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

            )
                :
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography variant="h6" style={{ textAlign: "center", paddingRight: "20px" }}>No data</Typography>
                    <Tooltip title="Back to Home" placement="top-end" style={{ cursor: "pointer" }}>
                        <KeyboardReturnIcon onClick={() => { navigate("/food") }} />
                    </Tooltip>
                </Box>
            }

        </Box>
    )
}

export default FoodCart