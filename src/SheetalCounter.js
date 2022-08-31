import React from 'react'
import { useSelector } from 'react-redux'

export default function SheetalCounter() {

   const data= useSelector(y=>y);
  return (
    <div>{data}</div>
  )
}
