import { AddBox } from '@mui/icons-material'
import {Box ,styled, Typography} from '@mui/material'
import { NavData } from '../../Constants/data'

const NavWrapper = styled(Box)`
    display : flex;
    margin : 55px 130px 0 130px;
    justify-content : space-between
`

const NavContainer = styled(Box)`
    padding : 12px 8px;
    text-align : center;
`

const Text = styled(Typography)`
    font-size : 14px;
    font-weight : 600;
    font-family : inherit;
`
const NavBar = () => {
  return (
    <NavWrapper>
        {
            NavData.map((data,idx) => (
                <NavContainer key={idx}>
                    <img src={data.url} alt="nav" style={{width : 64}}/>
                    <Typography>{data.text}</Typography>
                </NavContainer>
            ))
        }
    </NavWrapper>
  )
}

export default NavBar