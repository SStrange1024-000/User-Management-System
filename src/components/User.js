import React, { useState } from 'react'
import { deleteUser } from './ApiService'
import './UserListStyle.scss';
import { useNavigate } from 'react-router-dom';

function User({user, onDelete}) {
  const [deleting,setDeleting]=useState(false);
  const navigate=useNavigate()

  const handleDeletingUser=async ()=>{
    setDeleting(true);
     try {
      await deleteUser(user.id);
      onDelete(user.id)
      
     } catch (error) {
      alert("failed to delete")
      
     }finally{
      setDeleting(false)
     }
  }

  
     const handleDetailedView = async()=>{
      navigate(`/user/${user.id}`)
     }

  return (
    <div className='mainUserCard' >
        <div className="userInfo">
          <h1 onClick={handleDetailedView}>{user.name}</h1>
          <h3>{user.email}</h3>
          <h3>{user.phone}</h3>
        </div>
        <div className="userDataAction">
          <button onClick={() => navigate(`/edit/${user.id}`)}>Edit</button>
          <button onClick={handleDeletingUser} disabled={deleting}>Delete</button>
        </div>
    </div>
  )
}

export default User