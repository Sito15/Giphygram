import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./assets/pages/Layout";
import Home from "./assets/pages/home";
import Buscar from "./assets/pages/buscar";
import Favoritos from "./assets/pages/favoritos";
import Visitados from "./assets/pages/visitados";

export default function App() {
  return (
    <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="buscar" element={<Buscar />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path="visitados" element={<Visitados />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);



