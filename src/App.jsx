import React from 'react'
import alphabetArray from './InitalData'
import { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [code,setCode]=useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Input Value:', inputValue);
    // You can perform further actions with the input value here
    handleDecode();
  };
  function handleDecode(){
    const x=inputValue.split('')
    console.log("x=",x);
    const len=x.length
    console.log(len);
    let newcode=''
    for(let i=0;i<len;i++){
    const result = alphabetArray.find(item => item.id === x[i]);
      console.log(result);
      newcode=newcode+" "+result.dcode
      setCode(newcode);
      console.log(code);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button type="submit">Submit</button>
      <h1>{code}</h1>
    </form>
  );
}

export default App