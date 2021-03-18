import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = (await axios.get('/api/test')).data;
      setData(fetchedData);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!</h1>
        <p>{data}</p>
      </header>
    </div>
  );
}

export default Home;
