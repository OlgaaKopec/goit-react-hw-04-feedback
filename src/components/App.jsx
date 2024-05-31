import { useState } from "react";
import {FeedbackOptions} from './FeedbackOptions/feedbackOptions.jsx';
import {Statistics} from './Statistics/statistics.jsx';
import {Notification} from './Notification/notification.jsx';
import './App.css';


export const App = () => {
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState (0);
const [bad, setBad] = useState (0);

const handleClick = chosenFeedback => {
if (chosenFeedback === 'good') { setGood (good + 1)} 
else if (chosenFeedback === 'neutral') {setNeutral (neutral + 1)}
else {setBad (bad + 1) 
}
}

const countTotalFeedback = () => {
  const total = good + neutral + bad
  return total
}

const countPositivePercentage = () => {
  const positivePercentage = (good * 100) /countTotalFeedback();
  return Math.round(positivePercentage,2);
}

  return (
    <div className='container'>
      <div>
        <p>Please leave feedback</p>
<FeedbackOptions 
options ={['good', 'neutral', 'bad']} 
onLeaveFeedback={handleClick}/>
      </div>
   <div>
    <p>Statistics</p>
    <Notification message="There is no feedback" 
    receivedFeedback={good > 0 || neutral > 0 || bad > 0}>
    <Statistics
    good={good}
    neutral={neutral}
    bad={bad}
    total={countTotalFeedback()}
    positivePercentage={countPositivePercentage()}/>
    </Notification>
      </div>
      </div>
  )
}
