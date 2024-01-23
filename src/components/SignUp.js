import React, { useState, useEffect } from "react";
import "./components.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("male");

  const navigate = useNavigate()

//   useEffect(() => {
//     sessionStorage.clear()
// }, [])

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = 'Please enter the value in'
    
    if(id === null || id === ''){
        isproceed = false
        errormessage += 'Username';
    }
    if (name === null || name === '') {
        isproceed = false;
        errormessage += ' Fullname';
    }
    if (password === null || password === '') {
        isproceed = false;
        errormessage += ' Password';
    }
    if (email === null || email === '') {
        isproceed = false;
        errormessage += ' Email';
    }
    if(!isproceed){
        toast.warning(errormessage)
    }else{
        if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

        }else{
            isproceed = false;
            toast.warning('Please enter the valid email')
        }
    }
    return isproceed;
  }

  const handleSubmit = (e) => {
    

        e.preventDefault();
        let regObj = { id, name, password, email, phone, country, address, gender };
        if(IsValidate()) {
        fetch("http://localhost:8000/user", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(regObj),
        }).then((res)=>{
            toast.success('Signup Successfully')
            navigate('/login')
        }).catch((err)=> {
            toast.error('Something Went Wrong' , 'Please Fill The Form Again')
        });
    }
    };
    
  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <h1>User Sign Up</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
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
                <div className="col-lg-6">
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
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Full Name <span className="errmsg">*</span>
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Email <span className="errmsg">*</span>
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Phone <span className="errmsg">*</span>
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Country <span className="errmsg">*</span>
                    </label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="form-control"
                    >
                      <option value="">Select Your Country</option>
                      <option value="india" >India</option>
                      <option value="russia" >Russia</option>
                      <option value="usa" >USA</option>
                      <option value="uk" >UK</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Gender <span className="errmsg">*</span>
                    </label>
                    <br></br>
                    <input
                      type="radio"
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
                      name="gender"
                      value="male"
                      className="form-check-input"
                    ></input>
                    <label className="check-label">Male</label>
                    <input
                      type="radio"
                      checked={gender === "female"}
                      onChange={(e) => setGender(e.target.value)}
                      name="gender"
                      value="female"
                      className="form-check-input"
                    ></input>
                    <label className="check-label">Female</label>
                    <input
                      type="radio"
                      checked={gender === "other"}
                      onChange={(e) => setGender(e.target.value)}
                      name="gender"
                      value="other"
                      className="form-check-input"
                    ></input>
                    <label className="check-label">Other</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
              <Link to="/login" className="btn btn-danger">Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
