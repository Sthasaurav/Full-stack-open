import { useState } from 'react'

const Button = (props) => {
  return (
    <>

      <button onClick={props.handleClick} > {props.text}</button>
    </>

  )


}

const Statistics = (props) => {
  return (
    <>
      <h1>statistics</h1>
      <p>good {props.good} </p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.total}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive} %</p>
    </>
  )



}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => { setGood(good + 1) }
  const handleNeutral = () => { setNeutral(neutral + 1) }

  const handleBad = () => { setBad(bad + 1) }
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good / total) * 100

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />

    </div>
  )
}

export default App