import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {viewUser,deleteUser, fineOneUser} from '../redux/action/action'

const Home = () => {
    const dispatch = useDispatch();
    // const [users,setUsers] = useState([]);
    const users =  useSelector((state) => state.signup.users)
    useEffect(() => {
        dispatch(viewUser());
    },[]);

    const deleteItem = (id) => {
        dispatch(deleteUser(id));
        dispatch(viewUser());
    }
    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>view</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map((data,i) => (
                            <tr key={i}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td><Link to={"/user/"+data._id}>View</Link></td>
                                <td><Link to={"/edit/"+data._id}>Edit</Link></td>
                                <td><button value="Delete"  onClick={() => deleteItem(data._id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home;