import '../index.css';
// import Countdown from 'react-countdown';


const Notification = ({ message, type, countdown }) => {
    if (!message) return null; // Don't render if there's no message


    return (
        <div className={`notification ${type}`}>
            {message}
            <span className="countdown">
                {countdown}
            </span>

        </div>
    );
}

export default Notification;
