import "./App.css";
import Header from "./Components/Header.js";
import TodoList from "./Components/TodoList.js";
import Footer from "./Components/Footer.js";
// import About from "./Components/About.js";
import { AddTask } from "./Components/AddTask";
import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // const [tasks,setTasks]=useState([
  //   {
  //     sno: 1,
  //     title:"Go to Mall",
  //     desc:"Buy Cloths"
  //   },
  //   {
  //     sno: 2,
  //     title:"Go to Market",
  //     desc:"Buy Vegetables"
  //   },
  //   {
  //     sno: 3,
  //     title:"Go to Gym",
  //     desc:"Do some WorkOut"
  //   }
  // ])
  let initTodo;
  if (localStorage.getItem("tasks") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("tasks"));
  }

  const onDelete = (titems) => {
    // console.log("Delete Button form titems",titems)
    setTasks(tasks.filter((e) => e !== titems));
    localStorage.setItem("tasks", JSON.stringyfy(tasks));
  };

  const addTasks = (title, desc) => {
    let sno;
    if (tasks.length === 0) {
      sno = 1;
    } else {
      sno = tasks[tasks.length - 1].sno + 1;
    }
    const mytask = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTasks([...tasks, mytask]); //(...Array making)
  };

  const [tasks, setTasks] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    // components should be in Pascal Case(YashGoodluck)
    <>
     <Header title="My List" searchbar={false} />
     <AddTask add={addTasks} />
     <TodoList myTask={tasks} onDel={onDelete} />
     <Footer />
      {/* <Router>
        <Header title="My List" searchbar={false} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTask add={addTasks} />
                  <TodoList myTask={tasks} onDel={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about"
            render={()=>{
              return(<About />)
            }}>
          </Route>
        </Switch>
        <Footer />
      </Router> */}
    </>
  );
}

export default App;
