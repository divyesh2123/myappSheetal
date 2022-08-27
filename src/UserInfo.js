import React, { useEffect, useState } from 'react'
import UserOne from './UserOne';

export default function UserInfo() {

    
   const [data,setData]= useState([]);
    
   
   useEffect(()=> {

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(y=>y.json())
    .then(y=> {
    
        setData(y);
    })

   },[])




  return (
    <div>
        {
            data.map((element)=> {

                console.log(element);
                return (<UserOne data={element}></UserOne>)
            })

        }

    </div>
  )
}
