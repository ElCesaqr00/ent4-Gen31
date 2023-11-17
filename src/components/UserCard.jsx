import React from 'react'
import"./styles/UserCard.css" 

const UserCard = ({user, delUser, setInfoUpdate, setIsDisable}) => {

  const handleDelete = () => {
    delUser("/users", user.id)
  }
  const handleUpdate = () => {
    setInfoUpdate(user)
    setIsDisable(false)
  }

  return (
    <div className='card-container'>
    <article className='card'>
      <h3 className='card-name'>{user.first_name} {user.last_name}</h3>
      <ul>
        <li className='card-point'><span className='card-info'>Email </span><span className='card-response'>{user.email}</span></li>
        <li className='card-point'><span className='card-info'>Birthday </span><span className='card-response'><i className='bx bx-gift'></i> {user.birthday}</span></li>
      </ul>
      <div className='card-button'>
      <button className='card-delete' onClick={handleDelete}><i className='bx bx-trash'></i></button>
      <button className='card-update' onClick={handleUpdate}><i className='bx bx-edit-alt' ></i></button>
      </div>
      </article>
      </div>
  )
}

export default UserCard