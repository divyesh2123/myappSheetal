import React from 'react'
import { useParams } from 'react-router'

export default function MyHome() {

  const {invoiceId} = useParams();
  
  return (
    <div>{invoiceId}</div>
  )
}
