import { useSelector } from 'react-redux'
import '../index.css'

const Notification = () => {
  const message = useSelector((state) => state.notification.message)

  if (message === '') return null

  if (message.includes('Error:')) {
    return <div className="notification">{message}</div>
  }

  return <div className="notification">{message}</div>
}

export default Notification
