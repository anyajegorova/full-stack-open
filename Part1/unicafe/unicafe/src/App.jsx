import { useState } from 'react';
import Header from './Header.jsx';
import Button from './Button.jsx';
import Statistics from './Statistics.jsx';

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const totalFeedback = good + neutral + bad;

  const handleClick = (feedback) => {
    feedback === 'good' ? setGood(good + 1) :
      feedback === 'neutral' ? setNeutral(neutral + 1) :
        feedback === 'bad' ? setBad(bad + 1) : null;
  }

  return (
    <div>
      <Header header='give feedback' />
      <Button text={'good'} handleClick={handleClick} />
      <Button text={'neutral'} handleClick={handleClick} />
      <Button text={'bad'} handleClick={handleClick} />
      <Header header='statistics' />
      {totalFeedback > 0 ? (<Statistics good={good} neutral={neutral} bad={bad} />) : 'No feedback given'}
    </div>
  )
}

export default App