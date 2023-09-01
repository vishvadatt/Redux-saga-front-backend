import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {signUp,fineOneUser,updateUser} from '../redux/action/action';
import './signup.css'
const Signup = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
  
    const [register,setRegister] = useState({
        name : "",
        email : "",
        password : "",
        mobile_no : ""
    });
    useEffect(() => {
        if(id !== undefined){
            console.log("use effect call",id);
            dispatch(fineOneUser(id));
        }
    },[id]);
    
    let findOneuser = useSelector((state) => state.signup.findOneUser);
   
    const {name,email,password,mobile_no} = register;

    const onInputChange = (e) => {
        console.log("regi..");
        setRegister({...register,[e.target.name] : e.target.value});
        console.log("regi..",register);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(id){
            console.log("id..",register);
            dispatch(updateUser(id,register));
        }else{
            console.log("id..",register);
            dispatch(signUp(register));
        }
        // setRegister({
        //     name : "",
        //     email : "",
        //     password : "",
        //     mobile_no : ""
        // })
    }
 
    return (
        <div>
            {/* <form onSubmit={(e) => onSubmit(e)}>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" name="name" value={name} onChange={(e) => onInputChange(e)} />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" name="email" value={email} onChange={(e) => onInputChange(e)} />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="text" name="password" value={password} onChange={(e) => onInputChange(e)} />
            </div>
            <div>
                <label htmlFor="">Mobile</label>
                <input type="text" name="mobile" value={mobile_no} onChange={(e) => onInputChange(e)} />
            </div>
            <div>
                <input type="submit" value="Submit" />
            </div>
            </form> */}

        <div className="form">
            <form onSubmit={(e) => onSubmit(e)}>
            <div className="title">Welcome</div>
            <div className="subtitle">Let's create your account!</div>
            <div className="input-container ic1">
                <input id="firstname" className="input" type="text" placeholder=" " name="name" value={findOneuser.name ? findOneuser.name : name} onChange={(e) => onInputChange(e)}/>
                <div className="cut"></div>
                <label htmlFor="firstname" className="placeholder">First name</label>
            </div>
            <div className="input-container ic2">
                <input id="email" className="input" type="text" placeholder=" " name="email" value={findOneuser.email ? findOneuser.email : email} onChange={(e) => onInputChange(e)}/>
                <div className="cut cut-short"></div>
                <label htmlFor="" className="placeholder">Email</label>
            </div>
            <div className="input-container ic2">
                <input id="password" className="input" type="password" placeholder=" " name="password" value={findOneuser.password ? findOneuser.password : password} onChange={(e) => onInputChange(e)}/>
                <div className="cut"></div>
                <label htmlFor="" className="placeholder">password</label>
            </div>
            <div className="input-container ic2">
                <input id="mobile" className="input" type="number" placeholder=" " name="mobile_no" value={findOneuser.mobile_no ? findOneuser.mobile_no : mobile_no} onChange={(e) => onInputChange(e)}/>
                <div className="cut"></div>
                <label htmlFor="" className="placeholder">Mobile No</label>
            </div>
            
            <input type="submit" className="submit" />
            </form>
            </div>
        </div>
    )
}

export default Signup;