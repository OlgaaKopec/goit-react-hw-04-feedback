import PropTypes from "prop-types"
import "./feedbackOptions.css"

 export const FeedbackOptions = ({onLeaveFeedback, options}) => {
    return (
        <ul className="feedbackStyles">
            {options.map(option => (
                <li key={option}>
                    <button className="button" type="button" onClick={()=> onLeaveFeedback(option)}>
                        {option}
                    </button>
                </li>))}
        </ul>
    )
}



FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
}