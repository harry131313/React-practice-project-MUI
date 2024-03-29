import React from 'react'
import { Stack } from '@mui/system'
import { Link } from '@mui/material'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => 
   (
    <Stack direction="row"
    alignment="center"
    p = {2}
    sx = {{position:'sticky', background:'#000', top: 0, justifyContent:'space-between'}}>
      <Link to="/" style={{display: 'flex', alignItems: 'cener'}}>
        <img src={logo} alt='logo' height={45} />
      </Link>
      <SearchBar/>

    </Stack>
  )


export default Navbar