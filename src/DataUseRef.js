import React,{useEffect, useRef} from 'react'

export default function DataUseRef() {

  const data =  useRef(0);

  const myData = ()=> {
    console.log(data.current);
  }

  useEffect(()=> {

      data.current.value = 0;
  },[])
  return (
    <div>

        <input type="text" ref={data} />

        <button onClick={myData}>Save</button>
    </div>
  )
}
