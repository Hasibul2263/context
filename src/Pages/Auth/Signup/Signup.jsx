import React, { useContext } from 'react'
import Content from '../../Context/Context'


export default function Signup() {
  const data=useContext(Content)
  
  return (
    <div>
      This is signup page
      <h4>My college name is {data?.college}</h4>
      <h3>my pin code is {data?.address.pin}</h3>
      
    </div>
  )
}
