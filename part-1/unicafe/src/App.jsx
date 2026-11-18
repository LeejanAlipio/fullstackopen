import { useState } from 'react';

const Statistics = ({feedbackCount, feedbackName}) => {
  return <p>{feedbackName} {feedbackCount}</p>
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
        <Statistics feedbackCount={good} feedbackName='Good'/>
        <Statistics feedbackCount={neutral} feedbackName='Neutral'/>
        <Statistics feedbackCount={bad} feedbackName='Bad'/>
      </div>
    </div>
  )
}

export default App