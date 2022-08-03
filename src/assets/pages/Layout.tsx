import { Outlet, Link } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';

const Layout = () => {
  return (
    <>
      <ChakraProvider>
   

      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        
          <HStack spacing={8} alignItems={'center'}>
          <Link to="/">Inicio</Link>
          <Link to="/buscar">Buscar</Link>
          </HStack>
        </Flex>
      </Box>
      </ChakraProvider>

      <Outlet />
    </>
  )
};

export default Layout;