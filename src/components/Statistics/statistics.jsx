import PropTypes from "prop-types";
import "./statistics.css";

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
    <ul>
      <li className="listStyle">
        <span>Good: </span>
        <span>{good}</span>
        </li>
      <li className="listStyle"> 
      <span>Neutral: </span>
        <span>{neutral}</span>
        </li>
      <li className="listStyle">
      <span>Bad: </span>
        <span>{bad}</span>
         </li>
      <li className="listStyle"> 
      <span>Total: </span>
        <span>{total}</span>
        </li>
      <li className="listStyle"> 
      <span>Positive Feedback: </span>
        <span>{positivePercentage}%</span>
        </li>
    </ul>
    )}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };