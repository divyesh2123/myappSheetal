import React,{useRef} from 'react'

export default function DataUseRef() {

  const data =  useRef(0);

  const myData = ()=> {
    console.log(data.current);
  }
  return (
    <div>

        <input type="text" ref={data} />

        <button onClick={myData}>Save</button>
    </div>
  )
}
