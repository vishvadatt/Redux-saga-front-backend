import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {signIn} from '../redux/action/action'

const Signin = () => {
    const dispatch = useDispatch();
    const [loginUser,setLoginUser] = useState({
        email : "",
        password : ""
    })
    const {email,password} = loginUser;
    console.log(loginUser);
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(loginUser));
    }

    const onInputChange = (e) => {
        setLoginUser({...loginUser,[e.target.name] : e.target.value});
    }
    return (
        <div>
            {/* <form onSubmit={(e) => onSubmit(e)}>
            
            <div>
                <label htmlFor="">Email</label>
                <input type="text" name="email" value={email} onChange={(e) => onInputChange(e)} />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="text" name="password" value={password} onChange={(e) => onInputChange(e)} />
            </div>
            <div>
                <input type="submit" value="Submit" />
            </div>
            </form> */}

            <div class="form">
                <form onSubmit={(e) => onSubmit(e)}>
                    <div class="title">Welcome</div>
                    <div class="subtitle">Let's Login</div>
                    
                    <div class="input-container ic2">
                        <input id="email" class="input" type="text" placeholder=" " name="email" value={email} onChange={(e) => onInputChange(e)} />
                        <div class="cut cut-short"></div>
                        <label for="email" class="placeholder">Email</label>
                    </div>
                    <div class="input-container ic2">
                        <input id="password" class="input" type="password" placeholder=" " name="password" value={password} onChange={(e) => onInputChange(e)}/>
                        <div class="cut"></div>
                        <label for="password" class="placeholder">password</label>
                    </div>
                
                    <button type="submit" class="submit">Submit</button>
                </form>
            </div>
                
        </div>
    )
}

export default Signin;