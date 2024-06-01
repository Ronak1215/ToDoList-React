import { useState } from 'react'
import './App.css'

function App() {

const [title, setTitle] = useState("")
const [des, setDes] = useState("")
const [maintask, setMainTask] = useState([])

const submitHandler = (e) => {
  e.preventDefault() 
  setMainTask([...maintask,{title,des}])
  setTitle("")
  setDes("")
  console.log(maintask)
}

const deleteHandler = (index) => {
  let copytask = [...maintask]
  copytask.splice(index,1)
  setMainTask(copytask)
}


let renderTask = <h2>No Task Available</h2>
if(maintask.length > 0){
  renderTask = maintask.map((t,index)=>{
    return(
      <li key={index} className='flex items-center justify-between'>
        <div className='flex justify-between items-center w-2/3 m-3'>
          <h5 className='text-2xl font-bold'>{t.title}</h5>
          <h6 className='text-lg font-semibold'>{t.des}</h6>
        </div>
        <button 
        onClick={()=>{
          deleteHandler(index)
        }}
        className='bg-red-500 text-white px-5 py-2 rounded-md font-bold'>Delete</button>
      </li>
    );
  });
}

  return (
    <>
     <h1 className="bg-black text-white text-5xl p-5 font-bold text-center ">
      Ronak's To Do List
    </h1> 
    <form onSubmit={submitHandler}>
      <div className='flex justify-between'>
        <input 
          type="text" 
          className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
          placeholder='Enter Title here'
          value={title}
          onChange={(e)=>{
          setTitle(e.target.value)
          }}
        />
        <input 
          type="text" 
          className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
          placeholder='Enter Description here'
          value={des}
          onChange={(e)=>{
          setDes(e.target.value)
          }}
          
        />
        <button className='text-2xl text-white bg-black font-bold rounded-md m-5 px-5 py-3'>Add Task</button>
      </div>
    </form>
    <hr/>
    <div className='p-8 bg-slate-200'>
      <ul>{renderTask}</ul>
    </div>
    </>
  )
}

export default App
