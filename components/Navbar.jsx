import Link from "next/link"
import { Flex, Box, Menu, MenuItem, MenuButton, IconButton, MenuList, Spacer } from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import { BsSearch } from "react-icons/bs"
import {FiKey} from 'react-icons/fi'

function Navbar() {

  return (
    
    <Flex p='2' borderBlock={'1px'} borderColor='gray.100'>
      <Box fontSize={'3xl'} fontWeight='bold' color={'blue.400'}>
        <Link href={'/'}  >Read State</Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton as={IconButton} varient='outlined' icon={<FcMenu />} color='red.400' />
          <MenuList>
            <Link href={'/'} passHref>
              <MenuItem icon={<FcHome/>}>Home</MenuItem>
            </Link>
            <Link href={'/search'} passHref>
              <MenuItem icon={<BsSearch/>}>Search</MenuItem>
            </Link>
            <Link href={'/search?purpose=for-sale'} passHref>
              <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
            </Link>
            <Link href={'/search?purpose=for-rent'} passHref>
              <MenuItem icon={<FiKey/>}>Rent Property</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>

    </Flex>
    
  )
}

export default Navbar