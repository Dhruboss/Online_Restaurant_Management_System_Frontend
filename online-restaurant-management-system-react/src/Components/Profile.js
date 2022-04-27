import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';


const Profile = (props) => {
    const {c_id,name,email,pass,address}=props.user
    //console.log(props.user)
    //console.log(name);
    const [update,setUpdate]=useState({
        c_id: "",
        name:"" ,
        email:"" ,
        pass:"",
        address:"" 
      
    });
    const mount=()=>{
        setUpdate(
            {
                c_id: c_id,
                name: name,
                email: email,
                pass: pass ,
                address: address
            }
        )
    }
    useEffect(()=>{
        
        mount()
     
    },[])
    
    const handleChange=(e)=>{
        console.log(update)
        const newUpdate={...update};
        newUpdate[e.target.name]= e.target.value
        setUpdate(newUpdate);
    }
    const history=useHistory()

    const handleSubmit=(e)=>{
        
        console.log(update)
        axios.post('http://127.0.0.1:8000/api/profile',update)
        .then(resp=>{
            history.push('/profile')
        }).catch(err=>{
          console.log(err);
        });
        e.preventDefault();
    }
    return (
        <div>
            
            <div className="row gutters" style={{marginTop:"50px"}}>
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div className="card h-100">
                    <div className="card-body">
                        <div className="account-settings">
                            <div className="user-profile">
                                <h6 className="mb-2 text-primary">Personal Details</h6>
                                <h6 className="user-name"><i className="fas fa-user"></i><b> {name}</b></h6>
                                <h6 className="user-email"><i className="fas fa-envelope"></i><b> {email}</b></h6>
                                <h6 className="user-name"><i className="fas fa-phone-alt"></i><b> {address}</b></h6>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </div>
                
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="card h-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} >
                        <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <h6 className="mb-2 text-primary">Profile Edit</h6>
                            </div>
                            
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label for="name" > Name</label>
                                    <input type="text" className="form-control" name="name" defaultValue={name} onChange={handleChange} onClick={mount}/>
                                </div>
                            </div>
                            
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control" name="email" defaultValue={email} onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label for="address">Address</label>
                                    <input type="text" className="form-control" name="address" defaultValue={address} onChange={handleChange}/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <h6 className="mt-3 mb-2 text-primary">Change Password</h6>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label for="Pass">Password</label>
                                    <input type="password" className="form-control" name="pass" defaultValue={pass} onChange={handleChange}/>
                                </div>
                            </div>
                        
                        </div>
                        
                        <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="text-right">
                                    <input type="submit" name="submit" value="UPDATE" className="btn btn-primary login_button"/>
                                </div>
                            </div>
                        </div>
                    
                        </form>
                    </div>
                    
                </div>
                
                </div>
            
            </div>
        </div>
    );
};

export default Profile;