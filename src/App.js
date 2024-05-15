import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss'; 
import Card from './Components/Card';
import Modal from './Components/Modal';
function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  

  return (
    <div className="App">
    
        
       {data.map(item => (
        <Card
          key={item.id}
          item={item}
          onClick={() => handleCardClick(item)} 
        />
      ))}
    

      {selectedItem && <Modal item={selectedItem} />} 
    
    </div>
  );
}

export default App;
