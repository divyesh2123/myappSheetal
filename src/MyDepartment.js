import React, { useContext } from 'react'
import LanContext from './LanContext'

export default function MyDepartment() {

   const {myData} = useContext(LanContext);

   const obje = {
    en : {

        DepartmentName : "Department Name"

    },

    hn : {

        DepartmentName : "विभाग का नाम"
    }

   }
  return (
    <div>

        <label>
                    {obje[myData].DepartmentName}
        </label>

        <input type="text" />
    </div>
  )
}
