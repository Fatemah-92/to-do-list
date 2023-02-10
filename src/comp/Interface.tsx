import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function Interface() {

  const [task, setTask] = useState('')
  const api = 'https://63e49ef6c04baebbcda867be.mockapi.io/todolist'
  const navigate = useNavigate()

  const addTask = ()=>{
    if(task.length >=2) {
      axios.post(api, {
      task,
      complete: true
      } 
      ).then(()=> {
        axios.get(api)
        navigate('/addTask')
      })
    } else{
      alert("Please write task!")
  }
  }
  return (
    <div>
      <div>
        Enty task:
        <input type="text" onChange={e=> setTask( e.target.value)}/>
        <button onClick={addTask}>+</button>
      </div>
    </div>
  )
}