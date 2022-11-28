import axios from 'axios';
import { useEffect, useState } from 'react';
import './index.css';
import Residentlnfo from './productox/Residentlnfo'
function App() {
  
  const [rickType, setRickType] = useState({});
  const [typeId, setTypeId] = useState("");
  
  useEffect(() => {
    const randomId = Math.floor(Math.random()* 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}/`)
      .then(res => setRickType(res.data));
  },[]);
   console.log(rickType);

  const searchType = () =>  {
    
     axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
     .then(res => setRickType(res.data)); 
  }   
                     
  return (
    
    <div>
      <div className="navbar">
        
           <img src="img.png/kelvin.png" alt="img de Rick and morty" />
     
      </div>
     <h1>Rick and Morty Wiki</h1>
     <div className='imputbutton'>
      <input type="text" value={typeId} onChange= {e => setTypeId(e.target.value)} />  
      <button onClick={searchType}>Search</button>
     </div>
    <div className="App">
     <h3>{rickType.name}</h3>
     <li>Type: {rickType.type}</li>
     <li>Dimension: {rickType.dimension}</li> 
     <li>Population: {rickType.residents?.length}</li>
    </div> 
      <div>
       <ul>
        {rickType.residents?.map((resident) => (
          <Residentlnfo url={resident} key={resident} />
        ))}
      </ul>
     </div>
    </div>
  )
}

export default App
