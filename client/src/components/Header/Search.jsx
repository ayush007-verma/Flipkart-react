import { Box, InputBase, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
const SearchContainer = styled(Box)`
    background : #fff;
    width  :38%;
    border-radius : 2px;
    margin-left : 10px;
    display : flex;
`

const InputSearchBase = styled(InputBase)`
    padding-left : 20px;
    width : 100%;
    font-size : unset;
`
const SearchIconWrapper = styled(Box)`
    color : blue;    
    padding : 5px;
    display : flex;
`

const Search = () => {
    return (
        <SearchContainer style={{ display: "flex" }}>
            <input class="search_input" type="text" title="Search for products, brands and more" name="q" autocomplete="off" placeholder="Search for products, brands and more" value="" />
            {/* <div className='search-icon'> */}
                {/* <SearchIcon/> */}
            {/* </div> */}
            <button className='search_icon' type='submit'>
                <SearchIcon />
            </button>
        </SearchContainer>
    )
}

export default Search