import "./App.css";
import Header from "./Components/Header.js";
import TodoList from "./Components/TodoList.js";
import Footer from "./Components/Footer.js";
import { AddTask } from "./Components/AddTask";
import React, { useState, useEffect } from "react";



function App() {
 
  let localList;

  if (localStorage.getItem("tasks") === null) {            //gets task named file from local storage
    localList = [];
  } else {
    localList = JSON.parse(localStorage.getItem("tasks")); //convert it into js object format
  }
  const [tasks, setTasks] = useState(localList);
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));  //converts new task array in tasks.json
  }, [tasks]);
 
  const onDelete = (x) => {
    setTasks(tasks.filter((e) => e !== x));
    
  };

  
  const addTasks=(ttle,desc)=>{
    let newTask=[...tasks]
    if(!ttle || !desc){
      alert("item name or price cannot be empty")
    }else{
     newTask.push({ title:ttle, desc:desc})
      setTasks(newTask)
    }
  }
  
 

  return (
    // components should be in Pascal Case(YashGoodluck)
    <>
     <Header title="My List" searchbar={false} />
     <AddTask add={addTasks} />
     <TodoList myTask={tasks} onDel={onDelete} />
     <Footer />
    </>
  );
}

export default App;  