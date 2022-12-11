import NavBar from './NavBar'
import Banner from './Banner'
import Slide from './Slide'

import { Box, styled } from '@mui/material'
import { useEffect } from 'react'
import { getProducts } from '../../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'


const Component = styled(Box)`
    padding : 10px;
    background : #F2F2F2;
`
const Home = () => {
  const { products } = useSelector(state => state.getProducts)
  console.log(products)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  return (
    <>
      <NavBar />

      <Component>
        <Banner />
        <Slide products={products} />
      </Component>
    </>
  )
}

export default Home