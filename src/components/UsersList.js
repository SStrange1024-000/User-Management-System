import React from 'react'
import User from './User';
import './UserListStyle.scss';

function UsersList({users,removeUser}) {
  


// const handleAddUser=(newUser)=>{
//     setUsers([newUser,...users]);
// }

  return (
    <div className='mainList'>
        <h1 className='title'>This is usersList</h1>
    <div className='mainUserList'>
        {/* <AddUser onSuccess={handleAddUser}/> */}
        {users.map((item)=>(
            <User key={item.id} user={item} onDelete={removeUser}/>
    ))}
    </div>
    </div>
  )
}

export default UsersList