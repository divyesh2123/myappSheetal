import React,{ useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';
import ImageCellRender from './ImageCellRender';

export default function MyDataDisplayGrid() {

    const [rowData,setData] = useState([
        
      ]);
    
      const [columnDefs,setColmData] = useState([
        { field: 'albumId' },
        { field: 'id' },
        { field: 'title' },
        { field: 'url', cellRendererFramework: ImageCellRender,resizable: true },
       
      ]);

      const defaultColDef = {
        sortable: true,
        flex: 1, filter: true,
        floatingFilter: true
      }

      useEffect(()=> {

        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(y=> {
          setData(y.data);
        })

      },[])
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
    <AgGridReact rowData={rowData} columnDefs={columnDefs}  defaultColDef={defaultColDef}></AgGridReact>
  </div>
  )
}
