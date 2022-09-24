import React,{ useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';

export default function MyDataDisplayGrid() {

    const [rowData,setData] = useState([
        
      ]);
    
      const [columnDefs,setColmData] = useState([
        { field: 'postId' },
        { field: 'id' },
        { field: 'name' },
        { field: 'email' },
        { field: 'body' }, 
      ]);

      const defaultColDef = {
        sortable: true,
        flex: 1, filter: true,
        floatingFilter: true
      }

      useEffect(()=> {

        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(y=> {
          setData(y.data);
        })

      },[])
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
    <AgGridReact rowData={rowData} columnDefs={columnDefs}  defaultColDef={defaultColDef}></AgGridReact>
  </div>
  )
}
