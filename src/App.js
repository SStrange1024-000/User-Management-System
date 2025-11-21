import React, {useState,useEffect}from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import UsersList from './components/UsersList'
import AddUser from './components/AddUser'
import {usersData} from './components/ApiService'
import UserDetailView from './components/UserDetailView'


function App() {
  const[users,setUsers]=useState([]);


  //   api calling
  useEffect(()=>{
    loadUser();    
  },[])

//   get users data from api
 const loadUser= async()=>{
    const data= await usersData();
    setUsers(data)
}

const handleAddUser=(newUser)=>{
    setUsers([...users, newUser]);
}

// update user
const handleUpdateUser = (updatedUser) => {
  setUsers(prev =>
    prev.map(user => (user.id === updatedUser.id ? updatedUser : user))
  );
};


// delete user: remove by id
const removeUser=(id)=>setUsers((prev)=>prev.filter((x)=>x.id!==id))

  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path='/adduser' element={<AddUser onSuccess={handleAddUser}/>}/>
          <Route path="/edit/:id" element={<AddUser editUser={handleUpdateUser} users={users} />} />
          <Route path='/user/:id' element={<UserDetailView users={users}/>}/>

      </Routes>
      <Routes>
        <Route path='*' element={<h1>User Management Sysem</h1>}></Route>
          <Route path='/' element={<UsersList users={users} removeUser={removeUser}/>}/>
      </Routes>

    </div>
  )
}

export default App