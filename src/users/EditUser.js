import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function EditUser() {

    let navigate=useNavigate();

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    })

    const{name,username,email}=user;

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    };

    const onSubmit= async (e)=>{
        e.preventDefault();
        // console.log(user);
        await axios.post("http://localhost:8080/user",user);
        navigate("/");
    }
  return (
    <div className='container'>
        <div className='py-4'>
            <form className='w-50 mx-auto mt-2  border shadow p-5 bg-light rounded'>
            <h1 className='text-center mb-3 text-muted font-weight-bold'>
                <u>Edit User</u>
            </h1>
            <div className='mb-2'>
                <label for='InputEmail1' className='form-label text-muted'>
                Name
                </label>
                <input
                type={'text'}
                name='name'
                value={name}
                onChange={(e) => onInputChange(e)}
                className='form-control'
                id='InputEmail1'
                aria-describedby='emailHelp'
                placeholder='Enter Name'
                />
            </div>
            <div className='mb-2'>
                <label for='InputEmail1' className='form-label text-muted'>
                User Name
                </label>
                <input
                type={'text'}
                name='username'
                value={username}
                onChange={(e) => onInputChange(e)}
                className='form-control'
                id='InputEmail1'
                aria-describedby='emailHelp'
                placeholder='Enter User Name'
                />
            </div>
            <div className='mb-3'>
                <label for='InputEmail1' className='form-label text-muted'>
                Email
                </label>
                <input
                type={'email'}
                name='email'
                value={email}
                onChange={(e) => onInputChange(e)}
                className='form-control'
                id='InputEmail1'
                aria-describedby='emailHelp'
                placeholder='Enter Email'
                />
            </div>
    
            <button type='submit' className='btn btn-outline-primary'>
                Submit
            </button>
            <Link className='btn btn-outline-danger ml-2' to='/'>
                Cancel
            </Link>
            </form>
        </div>
    </div>
  )
}
