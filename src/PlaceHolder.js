import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { UserAction } from './action/userAction';
import { useDispatch, useSelector } from 'react-redux'

export default function PlaceHolder() {
 
    const dis = useDispatch();

    const dataUser = useSelector(y=>y.user);

    console.log(dataUser);

  useEffect(()=> {

    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(y=> {

        dis(UserAction(y.data));

    })

  },[])
  return (
    <div>PlaceHolder</div>
  )
}
