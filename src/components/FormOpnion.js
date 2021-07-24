import React, { useState, useContext }from 'react';
import ContextShop from '../contexApi/ContexShop';



function FormOpnion() {
  const { opnion, setOpnion } = useContext(ContextShop);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [describe, setDescribe] = useState('');

  function handleClick(ev) {
    ev.preventDefault();

    setOpnion((previous) => [
      ...previous,
      {
      name,
      age,
      describe,
      }
    ]);
    console.log(opnion);
  }

  return(
    <form onSubmit={ (ev) => handleClick(ev) } className="form-opnion" >
      <input
        type="text"
        placeholder="name"
        onChange={ (ev) => setName(ev.target.value) }
      />
      <input
        type="text"
        placeholder="age"
        onChange={ (ev) => setAge(ev.target.value) }
      />
      <textarea
        placeholder="your opnion"
        onChange={ (ev) => setDescribe(ev.target.value) }
      />

      <button type="submit">
        Send opnion
      </button>
    </form>
  );
  }
  
  export default FormOpnion;