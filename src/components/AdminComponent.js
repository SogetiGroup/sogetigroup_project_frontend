import UserService from "../services/UserService";
import React, {useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const AdminComponent = () => {

 const [users,setUsers]= useState([]);
 const [message,setMessage]=useState({value:"",type:""});
 const [reload, setReload] = useState(false);
 const params = useParams();

 useEffect(()=>{
const service = new UserService();

service.getAllUsers().then((response)=>{
    console.log(response);
    if (response.status ===200) {
        setUsers(response.data);
        //setMessage({value:"Operation is Done Fetched All Users From Backend API",type:"success"});
    } else {
        setMessage({value:"Failed",type:"danger"}); 
    }
})
 },[reload]);

    const Table=()=>{

        const TableHeader = ()=> {
            return (
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Title</th>
                        <th>UserLevel</th>
                        <th>Action</th>
                    </tr>
                </thead>
                )
        };
        const TableAction =(props)=>{
const history = useHistory();

            const deleteById=()=>{
                const service = new UserService();
                service.deleteUserById(props.id).then(response=>{
                    if (response.status === 204 ) {
                        setMessage({value:"The user with id : " + props.id + " is deleted successfully",type:"warning"});
                        setReload(!reload);   
                    } else {
                        setMessage({value:"API Error"+ response.status,type:"danger"});   
                    }
                });

            }

            const updateUserById=()=>{
                history.push(`/update/${props.id}`);
            }

            return(
        <div className='container'>
        <button type="button" className="btn btn-warning" onClick={updateUserById}>Edit</button>
        <button type="button" className="btn btn-danger m-2" onClick={() =>
        { if (window.confirm('Are you sure you wish to delete this user?')) deleteById()} }>Delete</button>
        </div>
            );
        };

const TableRow = ()=> {
    return (
        <tbody>
           {
            users.map( (user)=> (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td> {user.userTitle}</td>
                    <td>{user.userLevel}</td>
                    <td><TableAction id={user.id}/></td>
                </tr>
            ))   
           }                     
        </tbody>
    )
};
        return(
        <div className="container">
                <table className="table table-striped">
                    <TableHeader/>
                    <TableRow />
                </table>
        </div>
        );
    };

        
return(
<div className="container">
    <br/>
<h5 className='text-center'>LIST OF USERS</h5>
<br/>
{message && <div className={'alert alert-' + message.type}>{message.value}</div> }
<Link to="/add" className="btn btn-primary mb-2">Add User</Link>
<Table/>
</div>
);

};

export default AdminComponent;