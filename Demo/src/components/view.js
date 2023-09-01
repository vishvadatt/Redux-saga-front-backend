import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {fineOneUser} from '../redux/action/action';

const View = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(() =>{
        dispatch(fineOneUser(id));
    },[]);
    const user = useSelector((state) => state.signup.findOneUser)
    console.log("user.....",user)
    return(
        
        <div>
            <ul>
                <li style={{listStyle : "none"}}><h3>{user.name}</h3></li>
                <li>{user.email}</li>
                <li>{user.mobile_no}</li>
            </ul>
        </div>
    )
}

export default View;