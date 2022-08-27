import React, { useContext } from 'react'
import LanContext from './LanContext'

export default function Header() {


  var {myData,setData} = useContext(LanContext);

  var myFunction =(e)=> {

    setData(e.target.value);
  }


  return (
    <div>

        <select onChange={myFunction}>
            <option value="en">English</option>
            <option value="hn">Hindi</option>

        </select>

    </div>
  )
}
