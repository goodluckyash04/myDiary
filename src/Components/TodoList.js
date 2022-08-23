import React from 'react'
import { TodoItems } from "./TodoItems";

/*import TodoItems from "./TodoItems.js"*/ //while using function

export default function TodoList(props) {
  let style={
    minHeight:"50vh"
  }
  return (
  <>
  
    <div className='container' style={style}>
        <h3 className='text-center my-4 py-2 text-white-50 text-bg-dark'>My Tasks for the Day</h3>
        {props.myTask.length===0 ? <p className="text-center"> No Remaining Tasks </p>:
        props.myTask.map((item,key)=>
          <TodoItems listItems={item} key={key} tdelete={props.onDel}/>   /*this will redirect myTask from app=>TodoList=>TodoItems*/
         )       
         }
    </div>
    </>
  )
}


  //  if we want to directly use from app.js 
          //  <h4>{props.myTask[0].sno}{props.myTask[0].title}</h4>
          // <p>{props.myTask[0].desc}</p> *