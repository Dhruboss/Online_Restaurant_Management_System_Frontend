import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Profile from './Profile';
import Head from './Head';

const Profiledata = () => {
    const id=localStorage.getItem('c_id');
    console.log(id)
    const [user,setUser]=useState([]);
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/profile/${id}`)
        .then(res=>{
            setUser(res.data)    
        })
    },[]);
    return (
        <div>
            <Head/>
            {
                <Profile user={user}></Profile>
            }
        </div>
    );
};

export default Profiledata;