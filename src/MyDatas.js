import React from 'react';
import DATA from './Data'
import DisaplyInfo from './DisaplyInfo';
import UserContext from './UserContext';

export default function MyDatas() {

    
   



  return (
    <UserContext.Provider value={DATA}>
        <DisaplyInfo ></DisaplyInfo>

    </UserContext.Provider>
  )
}
