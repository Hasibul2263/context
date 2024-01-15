import React from 'react'
import Content from './Context'
const information={
  name:"hasibul",
  surname: "mallick",
  roll:25,
  address: {
      vill: "debipur",
      pin: 713146,
      dist: "burdwan"
  },
  college: "jadavpur unuersity"
}
 function Data(props) {
 
console.log(props.children)
  return (
    <>
    <div>
      <Content.Provider value={information}>{props.children}</Content.Provider>
     
      
    </div>
    <h1>Hi hello this is data page</h1>
    </>
    
  )
}
export default Data;
