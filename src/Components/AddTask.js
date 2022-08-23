import React, { useState } from 'react';

export const AddTask = ({add}) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    
    const addTsks=(e)=>{
    e.preventDefault();
        add(title,desc);  //...call from app.js
        setTitle("")     // to set value to null after adding
        setDesc("")
    }

    return (
    <>
      <h3 className=" container text-center my-4 py-2 text-white-50 text-bg-dark">
        ADD Tasks{" "}
      </h3>
      <div className="container mb-4 col-6 ">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Task Title
            </label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.currentTarget.value)} className="form-control" id="title" />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Task Detail
            </label>
            <input type="text" value={desc} onChange={(e)=>setDesc(e.currentTarget.value)} className="form-control" id="desc" />
          </div>
          <button className="btn btn-primary" onClick={addTsks}>Add</button>
        </form>
      </div>
    </>
  );
};
