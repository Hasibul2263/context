import React, { useContext } from 'react'
import Content from '../../Context/Context'

export default function Login() {
  const data=useContext(Content);
  
  return (
    <div>
      this is login page
      <h1>my name is {data?.name}</h1>
      
    </div>
  )
}
