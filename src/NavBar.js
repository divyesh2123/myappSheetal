import React, { useState } from 'react'
import LanContext from './LanContext'
import MEmployee from './MEmployee';
import MyDepartment from './MyDepartment';
import Header from './Header';

export default function NavBar() {


    const [myData,setData] = useState("en");


  return (
    <LanContext.Provider value={{myData,setData}}>

        <Header/>

        <MyDepartment/>

        <MEmployee/>

    </LanContext.Provider>
  )
}
