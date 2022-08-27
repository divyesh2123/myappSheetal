import React from 'react'

export default function Airlience(data) {
  return (
    <tr>
            <td>{data.item}</td>
            <td>{data.item.country}</td>
            <td>{data.item.logo}</td>
            <td>{data.item.slogan}</td>
            <td>{data.item.head_quaters}</td>
            <td>{data.item.website}</td>
            <td>{data.item.established}</td>
       
     </tr>
  )
}
