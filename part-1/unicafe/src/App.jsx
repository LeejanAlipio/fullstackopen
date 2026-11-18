import { useState } from 'react';

const Statistics = ({good, neutral, bad}) => {
  const totalFeedback = good + neutral + bad;
  
  const average = (good - bad) / totalFeedback;

  const positive = (good / totalFeedback) * 100;


  return (
    <>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {totalFeedback}</p>
      <p>Average {average ? average : 0}</p>
      <p>Positive {positive ? positive : 0}%</p>
    </>
  )
}

const Button = ({onClick, feedbackName}) => {
  return <button onClick={onClick}>{feedbackName}</button>
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodFeedback = () => {
    setGood(good + 1);
  }

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1);
  }

  const handleBadFeedback = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button onClick={handleGoodFeedback} feedbackName='Good'/>
        <Button onClick={handleNeutralFeedback} feedbackName='Neutral'/>
        <Button onClick={handleBadFeedback} feedbackName='Bad'/>
      </div>
      <h1>Statistics</h1>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  )
}

export default App