import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function User() {

const [data,setData] =useState([]);

useEffect(()=> {

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(y=> {
        console.log(y);
        setData(y.data);
    })

},[])

  return (
    <div>
        {

           this.state.data.map((value,index,array)=> {
               return (<div>{value.username}
                {value.email}</div>)
            })

        }

    </div>
  )
}
