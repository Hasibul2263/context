import React from 'react'

export default function ChildC(props) {
    console.log(props)
  return (
    <div>
      <h1>This is Child C</h1>
      <p>my name is {props.name}</p>
    </div>
  )
}
