
// import { AppBar, Toolbar, styled, Typography, Box } from '@mui/material'

// import Search from './Search'
// import CustomButtons from './CustomButtons'

// import FlipkartIcon from '../../assets/images/logo.png';
// import PlusIcon from '../../assets/images/plus.png';

// const StyledHeader = styled(AppBar)`
//     background : #2874f0;
//     height : 55px;
// `

// const Component = styled(Box)`
//     margin-left : 12%;
//     line-height : 0;
// `

// const SubHeading = styled(Typography)`
//     font-size : 10px;
//     font-style : italic;
// `

// const PlusImg = styled('img')({
//     width: 10,
//     height: 10,
//     marginLeft: 4
// })

// const CustomButtonWrapper = styled(Box)`
//     margin : 0 5% 0 auto;
// `

// const Header = () => {
//     // const logoURL = '../../assets/images/logo.png';
//     // const subURL = '../../assets/images/plus.png';

//     return (
//         <StyledHeader>
//             <Toolbar style={{ minHeight: 55 }}>
//                 <Component>
//                     <img src={FlipkartIcon} alt="logo" style={{ width: 75 }} />
//                     <Box style={{ display: 'flex' }}>
//                         <SubHeading>
//                             Explore &nbsp;
//                             <Box component="span" style={{ color: "#FFE500" }}>
//                                 Plus
//                             </Box>
//                         </SubHeading>
//                         <PlusImg src={PlusIcon} alt="sub-logo" />
//                     </Box>
//                 </Component>
//                 <Search />
//                 <CustomButtonWrapper>
//                     <CustomButtons />
//                 </CustomButtonWrapper>
//             </Toolbar>
//         </StyledHeader>
//     )
// }


// export default Header;

import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons'

import './Header.css';

import FlipkartIcon from '../../assets/images/logo.png';
import PlusIcon from '../../assets/images/plus.png';


const SubHeading = styled(Typography)`
    font-size : 10px;
    font-style : italic;
`

const Header = () => {

    return (
        <AppBar position="static">
            <Toolbar>
                <div className='d-flex' style={{ flexDirection: "column" }}>
                    <img src={FlipkartIcon} width="75" alt='logo' />
                    <Box style={{ display: 'flex' }}>
                        <SubHeading>
                            Explore &nbsp;
                            <Box component="span" style={{ color: "#FFE500" }}>
                                Plus
                            </Box>
                        </SubHeading>
                        <img src={PlusIcon} width="10" height="10" alt='plus-logo' />
                    </Box>
                </div>
                <Search />
                <CustomButtons />
            </Toolbar>
        </AppBar>
    );
}
export default Header;