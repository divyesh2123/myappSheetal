import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IncrementData } from './action/counteraction';

export default function Counter() {

  const data =  useSelector(y=>y);

  const dis = useDispatch();

  const myDataIncrement = ()=> {

    dis(IncrementData());
  }
  return (
    <div>{data}
    
        <button onClick={myDataIncrement}>Counter</button>
    </div>
  )
}
