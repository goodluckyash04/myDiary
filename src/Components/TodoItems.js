import React from 'react'

//using variables
export const TodoItems = ({titems,tdelete}) => {
 
  return (
    <div className='container border-bottom mb-2' >
      <h4>{titems.title}<button className="btn btn-sm btn-danger ms-4" onClick={()=>tdelete(titems)}>X</button></h4>
      <p>{titems.desc}</p>
    </div>
  )
}


//using function
/*
export default function TodoItems(props) {
  return (
    <div className='container'>
      <h4>{props.titems.title}</h4>
      <p>{props.titems.desc}</p>
    </div>
  )
}
*/

