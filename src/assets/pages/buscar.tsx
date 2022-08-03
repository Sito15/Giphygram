import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'



const Buscar = () => {
  const [data, setData] = useState([])
  const [search, setSearch]= useState("")


  const renderGifs = () => {
    return data.map(el => {
      return (
        <div key={el.id} className="gif">
          <img src={el.images.fixed_height.url} alt="" />
        </div>
      );
    });
  };
  const handleSearchChange = (event) =>
  {
    setSearch(event.target.value)
  }

  const handleSubit = async (event) => {
    event.preventDefault();
      const results = await axios("https://api.giphy.com/v1/gifs/search",{
        params:{
          api_key: "DvSjK4djkF6fN5qRq4JZ4GGa5DuAGgPg",
          q: search
        }
      })
      setData(results.data.data);
    }
  
  
  return (
    <ChakraProvider>
    <div className="m-2">
      <form className="form-inline justify-content-center m-2">
      <Container>
        <input
        value={search}
        onChange={handleSearchChange}
          type="text"
          placeholder="search"
          className="form-control"
        />
        <button
        onClick={handleSubit}
          type="submit"
          className="btn btn-primary"
        >
          Go
        </button>
        </Container>
      </form>
   
      <div className="container gifs">{renderGifs()}</div>
    </div>
    </ChakraProvider>
  );
};
export default Buscar;