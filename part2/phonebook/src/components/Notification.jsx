import '../index.css'
const Notification = ({ message }) => {
    if (!message) {
        return null;
    }

    return (
        <div className="notification">
            {message}
            {/* {console.log(message)} */}
        </div>
    );
}

export default Notification;
