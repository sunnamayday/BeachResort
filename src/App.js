import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';

const App = () =>{
  const APP_ID = 'e5cba252';
  const APP_KEY = '56bb3a2e0f2ece6c4e1ac2ffa32d3f4b';

  // const req_url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);
  useEffect(()=>{
    getRecipes();
    
  },[]);

const getRecipes = async () => {
  console.log(APP_ID);
  // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  // const target_url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  // const response = await fetch(req_url);
  const response = await fetch(
    `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
  ,{mode: 'no-cors'});
    // fetch(proxyUrl+target_url)
    // .then(blob=>blob.json())
    // .then(data=>{
    //   console.table(data);
    //   document.querySelector('pre').innerHTML = JSON.stringify(data,null,2);
    //   return data;
    // })
    // .catch(e=>{
    //   console.log(e);
    //   return e;
    // })
    console.log(response.status);
    
  const data = response.json();
  console.log(data.hits);
}

  return (
    <div className = "App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">search</button>
      </form>
      <h1 onClick={()=>{setCounter(counter+1)}}>{counter}</h1>
    </div>
  );
}


export default App;
