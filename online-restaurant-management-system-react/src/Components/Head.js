import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {DropdownButton,Dropdown} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './Nav';
  
const Head = () => {
    const id=localStorage.getItem('c_id');
    console.log(id)
    const [user,setUser]=useState([]);
    const history=useHistory();
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/profile/${id}`)
        .then(res=>{
            setUser(res.data)    
        })
    },[]);
    const handleLogout=()=>{
      localStorage.clear();
      setTimeout(() => { history.push('/login'); }, 100);
  }

  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/profile' activeStyle>
            Profile
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Log In</NavBtnLink>
          <NavBtnLink to='/registration'>Sign up</NavBtnLink>
        </NavBtn>
        {
          user?
        <DropdownButton id="dropdown-basic-button" title={user.name}>
                        <Dropdown.Item onClick={handleLogout} >Log out</Dropdown.Item>
        </DropdownButton>
        :
        <NavBtn>

        </NavBtn>
        }
      </Nav>
    </>
  );
};
  
export default Head;