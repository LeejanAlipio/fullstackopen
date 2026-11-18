import { useState } from "react";

const StatisticLine = ({ name, stat }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{stat}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedbacks given.</p>;
  }

  const totalFeedback = good + neutral + bad;

  const average = (good - bad) / totalFeedback;

  const positive = (good / totalFeedback) * 100;

  return (
    <table>
      <tbody>
        <StatisticLine name="Good" stat={good} />
        <StatisticLine name="Neutral" stat={neutral} />
        <StatisticLine name="Bad" stat={bad} />
        <StatisticLine name="All" stat={totalFeedback} />
        <StatisticLine name="Average" stat={average ? average : 0} />
        <StatisticLine name="Positive" stat={positive ? `${positive}%` : 0} />
      </tbody>
    </table>
  );
};

const Button = ({ onClick, feedbackName }) => {
  return <button onClick={onClick}>{feedbackName}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodFeedback = () => {
    setGood(good + 1);
  };

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1);
  };

  const handleBadFeedback = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button onClick={handleGoodFeedback} feedbackName="Good" />
        <Button onClick={handleNeutralFeedback} feedbackName="Neutral" />
        <Button onClick={handleBadFeedback} feedbackName="Bad" />
      </div>
      <h1>Statistics</h1>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  );
};

export default App;
