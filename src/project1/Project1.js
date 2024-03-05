import React from 'react'
import './project1.css';
const Project1 = (props) => {
  return (
    <div className='app'>
      <h1>name:{props.name}</h1>
      <h2>age:{props.age}</h2>
    </div>
  )
}

export default Project1;