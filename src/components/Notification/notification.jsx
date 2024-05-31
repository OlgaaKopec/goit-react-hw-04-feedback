import PropTypes from "prop-types";
import './notification.css';

export const Notification = ({children, receivedFeedback, message}) => {
    return (
        <div className="notificationStyle">
            {receivedFeedback ? (children) : (
                <p>{message}</p>
            )}
        </div>
    )}

    Notification.propTypes = {
        children: PropTypes.object,
        receivedFeedback: PropTypes.bool,
        message: PropTypes.string.isRequired,
      };