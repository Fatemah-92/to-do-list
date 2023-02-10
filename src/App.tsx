import axios from 'axios'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Interface from './comp/Interface'
import AddTask from './comp/AddTask'


function App() {
  return (
    <Routes>
    <Route path="/" element={<Interface />}></Route>
    <Route path="/addTask" element={<AddTask />}></Route>
  </Routes>
  )
}

export default App
