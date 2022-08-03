import { Outlet, Link } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

const Layout = () => {
  return (
    <>
      <ChakraProvider>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Inicio</Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link to="/buscar">Buscar</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/favoritos">Favoritos</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/visitados">Visitados</Link>
          </BreadcrumbItem>

        </Breadcrumb>
      </ChakraProvider>

      <Outlet />
    </>
  )
};

export default Layout;