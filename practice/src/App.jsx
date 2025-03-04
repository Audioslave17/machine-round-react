import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';

const App = ()=> {
  const url = "https://jsonplaceholder.typicode.com/users/1";
  const [userData, setUserData] = useState();

  const  getUserData = async() => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setUserData(jsonData);
  }

  useEffect(() => {
    getUserData();
    console.log(userData);
  },[]);

  return(
    <dev>
      {userData? <p>name: {userData.name}</p>:<p>Loading....</p>}
    </dev>
  )
}
export default App;
