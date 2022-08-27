import React, { useState } from 'react'
import MyArray from './MyArray';

export default function MyMemoSource() {

  const [data,setData]=  useState([]);
  const [input,setInput] = useState('');

  const myData = (e)=> {
    setInput(e.target.value)
  }

  const mySave = ()=> {

    setData([...data,input])
  }

  const mdelete = ()=> {

  }

  return (
    <div>

        <input type="text" value={input} onChange={myData}/>

        <button onClick={mySave}>Save</button>

        <MyArray data={data} myDelete={mdelete}></MyArray>

    </div>
  )
}
