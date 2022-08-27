import React from 'react'

export default function MyData(data) {
  return (
    <tr>
            <td>{data.name}</td>
            <td>{data.country}</td>
            <td>{data.logo}</td>
            <td>{data.slogan}</td>
            <td>{data.head_quaters}</td>
            <td>{data.website}</td>
            <td>{data.established}</td> 
       
     </tr>
  )
}
