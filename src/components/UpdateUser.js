import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link,useParams } from 'react-router-dom';
import UserService from '../services/UserService';

const UpdateUser = () => {
const {register,handleSubmit}= useForm();
const [message,setMessage]=useState({value:"",type:""});

const initialUserData = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    titles: [],
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

const editUser = (data)=>{
const service = new UserService();
service.updateUser(data).then((response)=>{
    console.log(response.data);
    if (response.data===200) {
     setUser(response.data); 
     setMessage({value:'User :' + params.id + ' is updated successfully',type:'success'}); 
    } else {
    setMessage({value:"API Error"+ response.status,type:"danger"});   
    }
});
}

return (
        <div className='container'>         
        <div className='col-xs-10 col-sm-8 p-sm-5 '>
            <form className='form-control m-2 p-3' onSubmit={handleSubmit(editUser)}>
                     <div className='row mb-3'>
                        <div className='col- m-auto'><input value={user.firstName} type="text"{...register("firstName",{required:true})} placeholder="Enter FirstName" class="form-control" /></div>
                   
                    </div>
                     <div className='row mb-3'>
                       <div className='col-m-auto'><input value={user.lastName} type="text"{...register("lastName",{required:true})} placeholder="Enter LastName" class="form-control" /></div>
                       
                     </div>
                     <div className='row mb-3'>
                           <div className='col- m-auto'><input value={user.email} type="text"{...register("email",{required:true})} placeholder="Enter Email" class="form-control" /></div>
                          
                     </div>
                     <div className='row mb-3'>
                     < div className='col- m-auto'><input value={user.titles} type="text"{...register("title",{required:true})} class="form-control" placeholder="Enter title"/></div>
                    </div>
                     <div className='row mb-3'>
                           <div className='col- m-auto'><input value={user.userLevel} type="text"{...register("userLevel",{required:true})} placeholder="Enter UserLevel" class="form-control" /></div>
                     </div>
                    <button type='submit' className='btn btn-primary m-2'>Update</button>
                    <Link to="/admin" className="btn btn-danger"> Cancel </Link>
            </form>	
        </div>
    </div>

    );  
};
export default UpdateUser;