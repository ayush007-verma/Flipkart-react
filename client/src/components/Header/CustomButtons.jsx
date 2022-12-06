import { useState, useContext } from 'react';

import { Box, Button, Typography, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { DataContext } from '../../Context/DataProvider';

import LoginDialog from './../Login/LoginDialog'
import Profile from './Profile';

const Wrapper = styled(Box)`
    display : flex;
    margin : 0 3% 0 auto;
    & > button , & > p , & > div {
        margin-right :40px;
        font-size : 16px;
        align-items : center
    }
`

const CartContainer = styled(Box)`
    display : flex
`

const LoginButton = styled(Button)`
    color : #2874f0;
    background : #FFFFFF;
    text-transform : none;
    border-radius : 2px;
    box-shadow : none;
    font-weight : 600;
    height : 32px;

`
const CustomButtons = () => {
    const [open, setOpen] = useState(false)

    const { account , setAccount} = useContext(DataContext)
    
    const openDialog = () => {
        setOpen(true)
        console.log(true)
    }
    return (
        <Wrapper style={{ display: 'flex', marginLeft: '10' }}>
            {account
                ?
                <Profile account={account} setAccount={setAccount}/>
                :
                <LoginButton variant="container"
                    onClick={() => openDialog()}>
                    Login
                </LoginButton>
            }

            <Typography style={{ marginTop: 3, width: 135 }}>
                Become a Seller
            </Typography>
            <Typography style={{ marginTop: 3, width: 135 }}>
                More
            </Typography>

            <CartContainer>
                <ShoppingCartIcon />
                <Typography>
                    Cart
                </Typography>
            </CartContainer>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButtons