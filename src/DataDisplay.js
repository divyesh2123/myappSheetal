import React, { useContext } from 'react'
import UserContext from './UserContext'

export default function DataDisplay() {

   const data=  useContext(UserContext);
  return (
    <div>
        {

            data.map((value)=> {

                return (<div>{value.title}</div>)
            })
        }

    </div>
  )
}
