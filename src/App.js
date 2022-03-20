import Home from "./Home";
import { useEffect, useState } from 'react';
import api from './api/api';

function App() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await api.get('/cardData');
        setData(response.data);
        console.log(response);
        
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  },[])

  return (
          <>
            <Home data={data} />
          </>
  );
}

export default App;
