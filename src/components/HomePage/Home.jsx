import React, { useEffect, useState } from 'react';
import Avatar from '../Avatar/Avatar.jsx';
import './Home.css'
import useDebounce from '../../hooks/useDebounce.js';

const Home = () => {
  const [updateSearchTerm, setUpdateSearchTerm] = useState('')
  const [inputValueLength, setInputValueLength] = useState(null)

  const debounceUpdateSearch = useDebounce((e) => 
  {
   
      setInputValueLength(e.target.value.length)
    
    console.log(e.target.value.length)
    setUpdateSearchTerm(e.target.value )
    }
  );

  
  return (
    <div className='home-page'>
      <h1 className="app-title">Github Avatar Scout</h1>
      <input className='search' placeholder='Search by your github username'  type='text' onChange={debounceUpdateSearch} />
      {/* <h1>Search: { updateSearchTerm }</h1> */}
      <Avatar username={updateSearchTerm} inputValueLength={inputValueLength} />
    </div>
  );
};
export default Home;

