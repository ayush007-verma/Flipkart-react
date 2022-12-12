import { Box, Typography, Menu, MenuItem, styled } from '@mui/material'
import { useState } from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const Component = styled(Menu)`
    margin-top : 5px;
`

const Logout = styled(Typography)`
    font-size : 14px;
    margin-left : 20px;
`

const Profile = ({ account, setAccount, logoutUser }) => {

    const [open, setOpen] = useState(false)

    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }

    const handleClose = () => {
        setOpen(false)
    }
    

    return (
        <>
            <Box onClick={handleClick} style={{ marginTop: 2 , cursor : "pointer"}}>
                <Typography>
                    {account}
                </Typography>
            </Box>
            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={()=>{ handleClose(); logoutUser() }}>
                    <PowerSettingsNewIcon color="primary" fontSize="small" />
                    <Logout>Logout</Logout>
                </MenuItem>
            </Component>
        </>
    )
}

export default Profile