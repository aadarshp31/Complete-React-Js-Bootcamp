import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "reactstrap";
import './App.css';
import Axios from "axios";

function App() {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const { data } = await Axios.get('https://randomuser.me/api/');
    const details = data.results[0];
    setDetails(details);
  }

  useEffect(() => {
    fetchDetails();
  }, [])


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
