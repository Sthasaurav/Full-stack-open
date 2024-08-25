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
      <Part name={props.part1} exercises={props.exercises1} />
      <Part name={props.part2} exercises={props.exercises2} />

      <Part name={props.part3} exercises={props.exercises3} />


    </>
  )
}

function Total(props) {
  return (
    <>
      <p>Number of exercises {props.exercises}</p>

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
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />

      <Content
        part1={part1.name}
        part2={part2.name}
        part3={part3.name}
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />


      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
      <Total exercises={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App