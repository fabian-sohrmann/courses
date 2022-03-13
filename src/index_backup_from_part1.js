import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <div>
      <h1>{props.course_h.name}</h1>
    </div>
  )
}

const Contents = (props) => {
  return(
    <div>
      <Part text={props.course_c.parts[0].name} nr={props.course_c.parts[0].exercises}/>
      <Part text={props.course_c.parts[1].name} nr={props.course_c.parts[1].exercises}/>
      <Part text={props.course_c.parts[2].name} nr={props.course_c.parts[2].exercises}/>
    </div>
  )
}

const Part = (props) => {
  return(
    <p>{props.text} {props.nr}</p>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Total {props.course_t.parts[0].exercises + 
                props.course_t.parts[1].exercises +  
                props.course_t.parts[2].exercises} exercises</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Superadvanced web and mobile programming',
    parts: [
      {
        name: 'Basics of React',
        exercises: 8,
        id: 1
      },
      {
        name: 'Using props',
        exercises: 10,
        id: 2
      },
      {
        name: 'Component states',
        exercises: 12,
        id: 3
      }
    ]
  }

  return (
    <div>
    {/* 
      <Header course_h={course} />
      <Contents course_c={course}/>
      <Total course_t={course}/>
    */}

      <Course course={course} />

    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)