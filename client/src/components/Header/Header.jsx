import { useState } from 'react'
import { AppBar, Toolbar, styled, Typography, Box, IconButton, Drawer, List, ListItem } from '@mui/material'
import { Menu } from '@mui/icons-material'
import Search from './Search'
import CustomButtons from './CustomButtons'

const StyledHeader = styled(AppBar)`
    background : #2874f0;
    height : 55px;
`

const Component = styled(Box)`
    margin-left : 12%;
    line-height : 0;
`

const SubHeading = styled(Typography)`
    font-size : 10px;
    font-style : italic;
`

const PlusImg = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

const MenuButton = styled(Menu)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))


const Header = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const list = () => {
        <Box>
            <List>
                <ListItem button>
                    <CustomButtons />
                </ListItem>
            </List>
        </Box>
    }

    return (
        <StyledHeader>
            <Toolbar style={{ minHeight: 55 }}>
                <IconButton aria-label="delete">
                    <MenuButton onClick={handleOpen} />
                </IconButton>
                <Drawer open={open} onClose={handleClose}>
                    {list}
                    helloworld
                </Drawer>
                <Component>
                    <img src={logoURL} alt="logo" style={{ width: 75 }} />
                    <Box style={{ display: 'flex' }}>
                        <SubHeading>
                            Explore &nbsp;
                            <Box component="span" style={{ color: "#FFE500" }}>
                                Plus
                            </Box>
                        </SubHeading>
                        <PlusImg src={subURL} alt="sub-logo" />
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}


export default Header;