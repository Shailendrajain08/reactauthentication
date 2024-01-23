import React, { useState,  useEffect  } from "react";
import "./components.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const usenavigate = useNavigate()

    useEffect(() => {
        sessionStorage.clear()
    }, [])

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in'
        
        if(id === null || id === ''){
            isproceed = false
            errormessage += ' Username ';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password ';
        }if(!isproceed){
            toast.warning(errormessage)
        }
        console.log(isproceed) 
        return isproceed;
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if(IsValidate()) {
            fetch("http://localhost:8000/user/"+id).then((res)=>{
                return res.json()
            }).then((res)=>{    
                console.log(res)
                if(Object.keys(res).length === 0){
                    toast.error('Please Enter Valid User')    
                }else{
                    if(res.password === password){
                        toast.success('Login Successful')
                        sessionStorage.setItem('username', id)
                        usenavigate('/')
                    }else{
                        toast.error('Please Enter Valid Credentials')
                    }
                }
            }).catch((err) => {
                toast.error('Login Failed Due to: ' +err.message);
            })
        }
    }
  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleLogin}>
          <div className="card">
            <div className="card-header">
              <h1>User Sign Up</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>
                      User Name <span className="errmsg">*</span>
                    </label>
                    <input
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      type="text"
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>
                      Password <span className="errmsg">*</span>
                    </label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <br></br>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                  <Link to='/signup' className="btn btn-success">New User</Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
