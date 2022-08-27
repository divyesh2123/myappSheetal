import { setIn } from 'formik';
import React, { useReducer, useState } from 'react'

export default function MyReducerData() {

    const [input,setInput] = useState('');
    
  

   const myReducer = (state,{type, payload})=> {
    
        switch(type)
        {
            case "ADD":

            return [...state, payload];

            default :

            return state;
            
        }

   }

   const [data,setData] = useReducer(myReducer,[]);

   const myData = (e)=> {

    setInput(e.target.value);
}

const mySave = (e)=> {

    e.preventDefault();
    setData({type:"ADD", payload : input})

}
  return (
    <div>

        <form onSubmit={mySave}>

            <input type="text" value={input} onChange={myData} />

            <input type="submit" value="save" />

        </form>

        {
                data.map((e)=> {
                        return (<div>{e}</div>)
                })
        }

    </div>
  )
}
