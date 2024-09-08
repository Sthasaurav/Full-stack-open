import '../index.css';
import Countdown from 'react-countdown';


const Notification = ({ message, type }) => {
    if (!message) {
        return null;
    }

    return (
        <div className={`notification ${type}`}>
            {message}
            <span className="countdown">
                <Countdown date={Date.now() + 10000} />
            </span>
        </div>
    );
}

export default Notification;
