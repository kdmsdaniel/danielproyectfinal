import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Residentlnfo = ({ url }) => {
  const [residents, setResidents] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => setResidents(res.data));
  }, []);
  console.log(residents)
  return (
   
  <div className="container">
          <div className="card">
            <img className="card-img-top" src={residents.image} alt="AnimeAbadango"/>
            <div className="card-body">
              <h5 className="card-title">{residents.name}</h5>
             <p className="card-text">status: {residents.status}</p>
             <h5 className="card-title">origin: {residents.location?.name}</h5>
              <p className="card-text">episodes where appear: {residents.image?.length} </p> 
            </div>
          </div>
    </div>
 
  );
};

export default Residentlnfo;