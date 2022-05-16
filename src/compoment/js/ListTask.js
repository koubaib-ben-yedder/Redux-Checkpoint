import React from 'react'
import Task from "./Task"
import { useSelector } from 'react-redux'
const ListTask = () => {
    const  getData=useSelector(state=>state.data)

  return (
    <div>{getData.map((el)=><div><Task el={el} /></div>)}</div>
  )
}

export default ListTask