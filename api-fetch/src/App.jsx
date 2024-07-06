import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const url = "https://jsonplaceholder.typicode.com/users/1";
  const [userData, setUserdata] = useState();

  const getUSerdata = async() => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setUserdata(jsonData);
  }

  useEffect(() => {
    getUSerdata();
    console.log(userData);
  },[]);
  
  return (
    <div>
      {userData? <p>name: {userData.name}</p>:<p>Loading....</p>}
    </div>
  );
}

export default App;
