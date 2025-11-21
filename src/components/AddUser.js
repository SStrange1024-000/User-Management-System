import React, { useState,useEffect} from 'react'
import { createuser, updateUser } from './ApiService';
import { useNavigate, useParams } from 'react-router-dom';
import './UserListStyle.scss';

function AddUser({users , editUser ,onSuccess}) {
    const [form,setForm]=useState({ name:"",email:"",phone:""});
    const [submitting,setSubmitting]=useState(false);

    const { id } = useParams();          // get user ID from URL
    const navigate = useNavigate();
    const isEdit = Boolean(id);  

    useEffect(() => {
    if (isEdit) {
      const existingUser = users.find((u) => u.id == id);
      if (existingUser) {
        setForm({
          name: existingUser.name,
          email: existingUser.email,
          phone: existingUser.phone,
        });
      }
    }
  }, [isEdit, id, users]);

    const handleOnchange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    };


    const formSubmit= async(e)=>{
        e.preventDefault();
        setSubmitting(true);
        

        try {
            
            if(isEdit){

                await updateUser(id,form);

                const updated={
                    id:Number(id),
                    ...form,
                }

                editUser && editUser(updated)




            }else{
                
                await createuser(form);

                const newUser = {
                    id: Date.now(),  // UNIQUE ID FIX
                    ...form,
                };

                onSuccess && onSuccess(newUser);
                setForm({ name:"",email:"",phone:""});

            }
            
            navigate("/");

        } catch (error) {
            // alert("failed to add user")
        }finally{
            setSubmitting(false)
        }
    }



  return (
    <div className="addUserMain">
        <h1 className="title">{isEdit ? "Edit User" : "Add User"}</h1>
        <form onSubmit={formSubmit}>

            <div className="dataForm">

                <div htmlFor="name"> 
                    <div>Name :</div>
                <input placeholder='Name' name='name' value={form.name} onChange={handleOnchange} />
                </div>
                <div htmlFor="email">
                    <div>Email :</div>
                <input type="text" placeholder='Email' name='email' value={form.email} onChange={handleOnchange} />
                </div>
                <div htmlFor="phone">
                    <div>Phone :</div>
                <input type="text" placeholder='Phone' name='phone' value={form.phone} onChange={handleOnchange} />
                </div>
            
            </div>

            <div className="btnContainer">
            <button type='submit' className="formSubmit">
                {isEdit ? "Edit" : `${submitting?"Adding":"Add"}`}</button>
            <button type='button' className="formSubmit" onClick={() => navigate(-1)} disabled={submitting}>Back</button>
            </div>
        </form>
        <p>Here You Can Add A New Data</p>
    </div>
  )
}

export default AddUser