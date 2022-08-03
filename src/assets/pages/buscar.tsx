import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.css';

const Buscar = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "DvSjK4djkF6fN5qRq4JZ4GGa5DuAGgPg"
        }
      }
      );
      console.log(results);
      setData(results.data.data);
    }
    fetchData();
  }, []);

  const renderGifs = () => {
    return data.map(el => {
      return (
        <div key={el.id} className="gif">
          <img src={el.images.fixed_height.url} alt="" />
        </div>
      )
    })
  }

  return <div className="container gifs">{renderGifs()}</div>;
};

export default Buscar;