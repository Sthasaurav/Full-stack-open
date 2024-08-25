// import Header from "./components/Header"
// import Content from "./components/Content"
// import Total from "./components/Total"

function Part(props) {
  return (
    <p>
      {props.name} {props.exercises}

    </p>
  )

}

function Content(props) {
  return (
    <>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />

      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />


    </>
  )
}

function Total(props) {
  return (
    <>
      <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>

    </>
  )
}

function Header(props) {
  return (
    <>
      <h1>{props.course}</h1>

    </>
  )
}


const App = () => {
  // const course = 'Half Stack application development'

  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />

      {/* <Content
        part1={parts[0].name}
        part2={parts[1].name}
        part3={parts[2].name}
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises}
      />


      <Total exercises={parts[0].exercises + parts[1].exercises + parts[2].exercises} /> */}
{/* 
      <Content parts={parts} />
      <Total parts={parts} /> */}

      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App