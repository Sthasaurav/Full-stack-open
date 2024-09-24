import React from 'react'
// import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import getAllUsers from '../reducers/userReducer'
const Users = () => {
  // const dispatch = useDispatch()
  // const users = useSelector((state) => state.users)

  // useEffect(() => {
  //   dispatch(getAllUsers())
  // }, [dispatch])

  return (
    <div>
      <h2>Users</h2>
      <table>
        <tr>
          <th>creator</th>
          <th>blogs created</th>
        </tr>
        <tr>
        </tr>
      </table>

    </div>
  )
}


export default Users
