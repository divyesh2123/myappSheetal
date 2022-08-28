import React, { useState,useCallback } from 'react'
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


// const myDelete =  useCallback(
//     () => {

//     },
//     [data],
//   )
  
// const myDelete = ()=> {

// }

 

  return (
    <div>

        <input type="text" value={input} onChange={myData}/>

        <button onClick={mySave}>Save</button>

      <MyArray data={data} ></MyArray>

    </div>
  )
}
