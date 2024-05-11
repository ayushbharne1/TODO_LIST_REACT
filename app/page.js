"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [MainTask, setMainTask] = useState([])

  const submitHandler = (e)=>{
          e.preventDefault()
          console.log(title)
          setMainTask([...MainTask,{title,desc}])
          settitle("")
          setdesc("")
          console.log(MainTask)
  }

  const deleteHandler = (i)=>{
      let copyTask = [...MainTask];
      copyTask.splice(i,1)
      setMainTask(copyTask)
  }
  

  let renderTask = <h2>No Task Yet.</h2>
  if(MainTask.length>0){
    renderTask = MainTask.map((t,i)=>{
      return <li key={i} className='flex items-center justify-between mb-5'>
      <div className=' w-2/3'>
        <h5 className='text-2xl text-zinc-800 font-semibold'>{t.title}</h5>
        <h6 className=' text-zinc-500  font-semibold'>{t.desc} </h6>
        
      </div>
      <button
       onClick={()=>{
        deleteHandler(i)
       }}
       className='bg-zinc-900 rounded-md outline-none text-white font-semibold px-4 py-2'>Delete</button>
    
      </li>
       
    })
  }
  return (
    <>
    <h1 className='text-white bg-black text-3xl font-bold p-5 text-center tracking-tighter'>Todo List</h1>
    <form onSubmit={submitHandler}>
      <input type='text' className='text-black px-4 py-2 border-2 border-zinc-800 m-5 outline-none rounded-md' placeholder='Enter Task Here' 
       value={title}
       onChange={(e)=>{
        settitle(e.target.value)
       }}
      />
      <input type='text' className='text-black px-4 py-2 border-2 border-zinc-800 m-5 outline-none rounded-md' placeholder='Enter Description Here' 
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />
      <button className='outline-none bg-zinc-800 rounded-md text-white px-4 py-2 m-5'>Add Task</button>
    </form>
    <hr/>
    <div className='px-10 py-2 bg-zinc-100 border-[1px] border-zinc-400 rounded-sm m-5 tracking-tighter '>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page