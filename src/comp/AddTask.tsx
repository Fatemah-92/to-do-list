import { useEffect, useState } from 'react'
import axios from 'axios';
import Interface from './Interface';
import { useNavigate } from 'react-router-dom';

export default function AddTask() {

  const api= 'https://63e49ef6c04baebbcda867be.mockapi.io/todolist'
    const [toDo, setToDo] = useState<any[]>([])
    const navigate = useNavigate()

    useEffect(()=> {
        axios.get(api).then(res=> {
            setToDo(res.data)
        })
    }, [])

    const deleteTask = (id: string)=> {
        axios.delete(`https://63e49ef6c04baebbcda867be.mockapi.io/todolist/${id}`).then(()=>{
            setToDo(toDo.filter(value=> {
                return value.id != id;
            }))
        })      
    }

    const updateTask = (id: string)=> {
      axios.put(`https://63e49ef6c04baebbcda867be.mockapi.io/todolist/${id}`).then(()=>{
          setToDo(toDo.filter(value=> {
              if(value.id != id) {
                return value
              }
          }))
      })      
    }

  return (

    <div>
      <Interface />
      <div>
            {toDo.map((item)=> 
                <div key={item.id}>
                     {item.task} 
                    <button onClick={()=> {deleteTask(item.id)}}>✗</button>
                    <button onClick={()=> {updateTask(item.id)}}>♲</button>
                </div>
             )}
      </div>
    </div>
  )
}