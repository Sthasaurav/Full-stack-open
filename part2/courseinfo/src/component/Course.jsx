
const Header = ({ course }) =>{
    return(
        <>
        
        <h1>{course}</h1>
        
        </>
        )
         
}


const Total = ({ parts }) => {

  return (
    <p>
      total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercise
      {/* {console.log('what is happening', sum, part)} */}
    </p>

  )
}

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (<Part key={part.id} part={part} />))}

    </>)
}

const Course = ({ course }) => {
  return (
    <>

      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>



  )
}

export default Course