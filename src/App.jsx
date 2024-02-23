import { useEffect, useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'
import useCrud from './hook/useCrud'
import FormUser from './components/FormUser'

function App() {

  const [infoUpdate, setInfoUpdate] = useState()
  const [isDisable, setIsDisable] = useState(true)
  
  const url = "https://nodecrud-desq.onrender.com/users";
  
  const [users, getUsers, createUser, delUser, updateUser] = useCrud(url)

  useEffect(() => {
  getUsers("/users")
    }, [])
 
    const handleOpen = () => {
      setIsDisable(false)
    }

  return (
    <><header className='header'>
      <h1>Users</h1>
      <button className='user__btn' onClick={handleOpen}><i class='bx bx-plus' ></i> Create new User</button>
      </header>
      <FormUser
      createUser={createUser} 
      infoUpdate={infoUpdate}
      updateUser={updateUser}
      setInfoUpdate={setInfoUpdate} 
      isDisable={isDisable} 
      setIsDisable={setIsDisable}
      />
      <div className='container'>
        {
          users?.map(user => (
           <UserCard 
           key={user.id}
           user={user}
           delUser={delUser}
           setInfoUpdate={setInfoUpdate}
            setIsDisable={setIsDisable} 
            /> 
          ))
        }
      </div>
    </>
  )
}

export default App
