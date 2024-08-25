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
      <Part name={props.part1} exercises={props.exercise1} />
      <Part name={props.part2} exercises={props.exercise2} />

      <Part name={props.part3} exercises={props.exercise3} />


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
  const course = 'Half Stack application development'

  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />

      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercise1={exercises1}
        exercise2={exercises2}
        exercise3={exercises3}
      />


      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App