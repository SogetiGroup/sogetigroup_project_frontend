import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Link,useParams } from 'react-router-dom';
import UserService from '../services/UserService';

const UpdateUser = () => {
const {register,handleSubmit}= useForm();
const [message,setMessage]=useState({value:"",type:""});
const [reload, setReload] = useState(false);
const history= useHistory();


const initialUserData = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    userTitle: "",
    userLevel: null
};

const params = useParams();
const [user,setUser]  = useState(initialUserData);

useEffect( ()=>{
    // todo: get id from url
    // todo: get data by id frop API(call api) and set it to user
    const service = new UserService();
    service.getUserById(params.id).then((response) => {
        console.log("RES::::", response.data);

        setUser(response.data);

    });
    console.log("TEST:::: ", user)
}, []);

const editUser = ()=>{

const service = new UserService();
const data = { id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    userTitle: user.userTitle,
    userLevel: user.userLevel};
console.log("Data:::: ", data);
service.updateUser(data.id, data).then((response)=>{
    console.log(response.data);
    if (response.data===200) {
     setUser(response.data); 
     history.push("/admin");
     setReload(reload);
     setMessage({value:'User :' + params.id + ' is updated successfully',type:'success'}); 
    
    } else {
    setMessage({value:"API Error"+ response.status,type:"danger"});   
    }
});
}
const inputChangeHandle = (e, name) =>{
   
    console.log("E:", e.target.value);
    console.log("N:", name);
    const _user = {... user};
    if(name === "firstName"){
        _user.firstName = e.target.value;
    } else if(name === "lastName"){
        _user.lastName = e.target.value;
    } else if(name==="email"){
        _user.email=e.target.value;
    }
    else if(name==="userTitle"){
        _user.userTitle=e.target.value;
    }
    else if(name==="userLevel"){
        _user.userLevel=e.target.value;
    }
    setUser(_user);
    

}

return (
        <div className='container'>         
        <div className='col-xs-10 col-sm-8 p-sm-5 '>
            <form className='form-control m-2 p-3'>
            <div class="panel-body text-center text-black"><h4 class="flexi shadow border-b">User Information</h4></div>
                     <div className='row mb-3'>
                        <div className='col- m-auto'><h6>FirstName</h6><input value={user.firstName}  type="text" onChange={(e)=> inputChangeHandle(e,"firstName")}  placeholder="Enter FirstName" class="form-control" /></div>
                   
                    </div>
                     <div className='row mb-3'>
                       <div className='col-m-auto'><h6>LastName</h6><input value={user.lastName} type="text" onChange={(e)=> inputChangeHandle(e,"lastName")}  placeholder="Enter LastName" class="form-control" /></div>
                       
                     </div>
                     <div className='row mb-3'>
                           <div className='col- m-auto'><h6>Email</h6><input value={user.email} type="text" onChange={(e)=> inputChangeHandle(e,"email")} placeholder="Enter Email" class="form-control" /></div>
                          
                     </div>
                     <div className='row mb-3'>
                     < div className='col- m-auto'><h6>UserTitle</h6><input value={user.userTitle} type="text" onChange={(e)=> inputChangeHandle(e,"userTitle")} class="form-control" placeholder="Enter userTitle"/></div>
                    </div>
                     <div className='row mb-3'>
                           <div className='col- m-auto'><h6>UserLevel</h6><input value={user.userLevel} type="text" onChange={(e)=> inputChangeHandle(e,"userLevel")} placeholder="Enter UserLevel" class="form-control" /></div>
                     </div>
                    <Link to="/admin" className='btn btn-primary m-2' onClick={editUser}>Update</Link>
                    <Link to="/admin" className="btn btn-danger"> Cancel </Link>
            </form>	
        </div>
    </div>

    );  
};
export default UpdateUser;