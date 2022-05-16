

import React from 'react'
const Task = ({el}) => {


  console.log(el)
  return (
    <div><li>description: {el.description} done: {el.done}</li></div>
  )
}

export default Task