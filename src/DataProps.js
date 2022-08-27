import React, { useEffect, useState } from 'react'
import Airlience from './Airlience'
import MyData from './MyData';

export default function DataProps() {

    const [data,setData] = useState([]);

    useEffect(()=> {

        fetch("https://api.instantwebtools.net/v1/airlines")
        .then(y=>y.json())
        .then(y=> {
            setData(y)
        })

    },[])

  return (
    <table>
        {
            data.map((element,index)=> {

                return (<MyData data={element} key={index}></MyData>)
            })

        }

    </table>
  )
}
