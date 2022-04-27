import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './Head';


const Login = () => {
    
    const [event, setEvent]=useState({
        email:"",
        pass:""
    })
    const [err,setErr]=useState("")
    const handleChange=(e)=>{
        const newUser={...event};
        newUser[e.target.name]= e.target.value
        setEvent(newUser);
    }
    const history=useHistory()
    
    console.log(event)
    const handleSubmit = (e) =>{
        axios.post('http://127.0.0.1:8000/api/login',event)
        .then(resp=>{
            if (!resp.data) {
                console.log('error')
            } else {
                if (resp.data.message) {
                    console.log(resp.data)
                    setEvent({
                        email:"",
                        pass:""
                    })
                    setErr(resp.data.message)
                } else {
                    console.log(resp.data.c_id)
                    localStorage.setItem('c_id',resp.data.c_id)
                    localStorage.setItem('userData',resp.data)
                    history.push('/');
                }
                
                
            }
            
        }).catch(err=>{
            
            console.log(err);
        });
        e.preventDefault();
    }
    return (
        <div>
                <Head/>
                <div class="page">
                    
                    <div class="login_body">
                    {
                        err?<div class="alert alert-info">{err}</div>:
                        ""
                    }
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="formGroupExampleInput" class="form-label">Email :</label>
                                <input type="text" name="email" class="form-control" id="formGroupExampleInput" onChange={handleChange}/>
                            </div>

                            <div class="mb-3" style={{"marginTop": "20px"}}>
                                <label for="formGroupExampleInput2" class="form-label">Password :</label>
                                <input type="password" name="pass" class="form-control" id="formGroupExampleInput2" onChange={handleChange}/>
                            </div>
                            <input type="submit" name="submit" value="Sign in" class="btn btn-primary login_button" />
                            <div class="swap_between_login_register">
                                <p>Don't have any account?</p>
                                <u><Link to="/registration"> Create an account</Link></u>
                            </div>
                        </form>
                    </div>
                
                </div>
        </div>
    );
};

export default Login;