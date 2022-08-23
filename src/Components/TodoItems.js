import React from 'react'

//using variables
export const TodoItems = ({listItems,tdelete}) => {
 
  return (
    <div className='container border-bottom mb-2 d-flex justify-content-between' >
      <div>
        <h4>{listItems.title}</h4>
        <p>{listItems.desc}</p>
      </div>
      <div><button className="btn btn-sm btn-danger ms-4" onClick={()=>tdelete(listItems)}>X</button></div>
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

