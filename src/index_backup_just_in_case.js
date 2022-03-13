import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const Contents = (props) => {
  return(
    <div>
      <Part text={props.text1_content} nr={props.nr1_content}/>
      <Part text={props.text2_content} nr={props.nr2_content}/>
      <Part text={props.text3_content} nr={props.nr3_content}/>
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
      <p>Total {props.nr1 + props.nr2 + props.nr3} exercises</p>
    </div>
  )
}

const App = () => {
  const course = 'Superadvanced web and mobile programming'
  const part1 = {
    name: 'Basics of React',
    exercises: 8
  }
  const part2 = {
    name: 'Using props',
    exercises: 10
  }
  const part3 = {
    name: 'Component states',
    exercises: 12
  }

  return (
    <div>
      <Header text={course} />
      <Contents text1_content={part1} 
                text2_content={part2} 
                text3_content={part3}
                nr1_content={exercises1} 
                nr2_content={exercises2} 
                nr3_content={exercises3}/>
      <Total nr1={exercises1} nr2={exercises2} nr3={exercises3}/>
    </div>
  )
}

{/*const App = () => {
  const course = 'Superadvanced web and mobile programming'
  const part1 = 'Basics of React'
  const exercises1 = 8
  const part2 = 'Using props'
  const exercises2 = 10
  const part3 = 'Component states'
  const exercises3 = 12

  return (
    <div>
      <Header text={course} />
      <Contents text1_content={part1} 
                text2_content={part2} 
                text3_content={part3}
                nr1_content={exercises1} 
                nr2_content={exercises2} 
                nr3_content={exercises3}/>
      <Total nr1={exercises1} nr2={exercises2} nr3={exercises3}/>
    </div>
  )
}*/}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)