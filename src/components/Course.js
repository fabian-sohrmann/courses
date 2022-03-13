import React from 'react' 

const Part = (props) => {
    return(
      <p>{props.text} {props.nr}</p>
    )
  }
  
  const Total = (props) => {
    let sum = 0
    const exerciseList = props.course_t.parts.map(part => part.exercises)
    exerciseList.forEach((elem) => sum = sum + elem)
    return(
      <div>
        <p>Total: {sum} </p>
      </div>
    )
  }
  
  const Contents = (props) => {
    return(
      <div>
        {props.course_c.parts.map(part => <Part key={part.id} text={part.name} nr={part.exercises}/>)}
      </div>
    )
  }
  
  const Header = (props) => {
    return(
      <div>
        <h1>{props.course_h.name}</h1>
      </div>
    )
  }
  
  const Course = (props) => {
    return(
      <div>
        <Header course_h={props.course} /> 
        <Contents course_c={props.course}/>
        <Total course_t={props.course} />
      </div>
    )
  }

  export default Course