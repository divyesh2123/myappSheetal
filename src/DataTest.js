import React, { useState } from 'react'

export default function DataTest() {
  const [data,setData] =  useState({
    firstName : "This is the",
    lastName : "",
    address: "",
    city : "",
    state : "",

  });

  const myHandler = (e)=> {

    setData({...data,[e.target.name]: e.target.value })

  }

  const mySubmit = (e) => {

    e.preventDefault();

    console.log(data);
  }

  
  return (
    <div>

            <form onSubmit={mySubmit}>

    <input type="text" onChange={myHandler} value={data.firstName} name="firstName" />
    <input type="text" onChange={myHandler} value={data.lastName} name="lastName" />
    <input type="text" onChange={myHandler} value={data.address} name="address" />
    <input type="text" onChange={myHandler} value={data.city} name="city" />

                <input type="submit" value="save"/>
            </form>


    </div>
  )
}
