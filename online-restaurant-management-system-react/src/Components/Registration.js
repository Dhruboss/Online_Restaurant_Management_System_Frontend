import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Registration = () => {
  
    const [user,setUser]=useState({
        name:"",
        email:"",
        pass:"",
        address:""
    })

    const validateEmail = (email) =>
        email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    

    const validatePass = (pass) =>
        pass.match(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
        );
    
    const history=useHistory();

    const [nameErr, setNameErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [passErr, setPassErr] = useState("");
    const [addressErr, setAddressErr] = useState("");

      
    const handleChange=(e)=>{
      const newUser={...user};
      newUser[e.target.name]= e.target.value
      setUser(newUser);
    }

    const handleSubmit=(e)=>{
        
        console.log(user)
        e.preventDefault();
        if(user.name !== ""  && user.email !== "" &&  user.pass !== "" && user.address !== "" ) 
        {
            setNameErr("")
            setPassErr("")
            setAddressErr("")
            axios.post('http://127.0.0.1:8000/api/registration',user)
            .then(resp=>{
              if (!resp.data) {
                console.log('erorr')
            } else {
              localStorage.setItem('c_id',resp.data.id)
              localStorage.setItem('userData',resp.data)
              history.push('/');
            }
           }).catch(err=>{
              console.log(err);
              setEmailErr("This mail already used")
            });
           
        }
        else{
            if(user.name === "")
                setNameErr("Please fill the name");
            else
                setNameErr("")

            if(!validateEmail(user.email))
                setEmailErr("Please enter valid mail");
            else
                setEmailErr("");

            
            if(!validatePass(user.password))
                setPassErr("Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)");
            else
                setPassErr("");

            if(user.address === "")
                setAddressErr("Please fill the address");
            else
                setAddressErr("")

        }
        
    }

    
    return (
      <div>
        {/* <Header/> */}
        <div className="register_page">
        <div className="register_body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label"> Name :</label>
                <input type="text" name="name" className="form-control" id="formGroupExampleInput" onChange={handleChange}/>
                <p style={{color: "red"}}>{nameErr}</p>
              </div>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Email :</label>
                <input type="text" name="email" className="form-control" id="formGroupExampleInput" onChange={handleChange}/>
                <p style={{color: "red"}}>{emailErr}</p>
              </div>

              <div className="mb-3" style={{marginTop: "20px"}}>
                <label for="formGroupExampleInput2" className="form-label">Password :</label>
                <input type="password" name="pass" className="form-control" id="formGroupExampleInput2" onChange={handleChange}/>
                <p style={{color: "red"}}>{passErr}</p>
              </div>

              <div className="mb-3" style={{marginTop: "20px"}}>
                <label for="formGroupExampleInput2" className="form-label">Address :</label>
                <input type="text" name="address" className="form-control" id="formGroupExampleInput2" onChange={handleChange}/>
                <p style={{color: "red"}}>{addressErr}</p>
              </div>
              <input type="submit" name="submit" value="REGISTER" className="btn btn-primary login_button"/>
              <div className="swap_between_login_register">
                <p>Already have an account?</p>
                <u> <Link to="/login"> Sign in here</Link></u>
            </div>
          </form>  
        </div>
        
      </div>
    </div>
    );
};

export default Registration;
