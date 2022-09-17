import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { GetUserImageData } from './action/userImageActionAsyc';
import { GetUserData } from './consts/userConst';

export default function MyUserImage() {

    const dis = useDispatch();

    const data = useSelector(y=>y.userImage);

    console.log("test");
    console.log(data);

    useEffect(()=> {

        dis(GetUserImageData())


    },[]);



  return (
    <div>{

      data?.data?.map((element,index)=> {

        return (<div key={index}>{element.email}</div>)
      })
      
      }</div>
  )
}
