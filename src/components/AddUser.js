import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserService from '../services/UserService';

const AddUser = () => {
    const [user,setUser]= useState([]);
    const {register,handleSubmit,formState:{errors}}= useForm();
    const [message,setMessage]=useState({value:"",type:""});
    const history= useHistory();

    const saveUser=(data)=>{
        console.log(data);
        const service = new UserService();
        service.saveUser(data).then(response=>{
            if (response.status===201) {
              setUser(response.data);
              history.push("/admin"); 
            } else {
             setMessage({value:"API Error",type:"danger"});
            }
        });

    }


    return (
        <div className='container'>         
        <div className='col-xs-10 col-sm-8 p-sm-5 '>
            <form className='form-control m-2 p-3' onSubmit={handleSubmit(saveUser)}>
                     <div className='row mb-3'>
<<<<<<< HEAD
                        <div className='col- m-auto'><input type="text"{...register("firstName",{required:true})} placeholder="Enter FirstName" class="form-control" /></div>
                    {errors.firstName && <span className='text-danger'>First Name is required</span>}
                    </div>
                     <div className='row mb-3'>
                       <div className='col-m-auto'><input type="text"{...register("lastName",{required:true})} placeholder="Enter LastName" class="form-control" /></div>
                       {errors.lastName && <span className='text-danger'>Last Name is required</span>}
                     </div>
                     <div className='row mb-3'>
                           <div className='col- m-auto'><input type="text"{...register("email",{required:true})} placeholder="Enter Email" class="form-control" /></div>
                           {errors.email && <span className='text-danger'>Email is required</span>}
                     </div>
                     <div className='row mb-3'>
                     < div className='col- m-auto'><input type="text"{...register("title",{required:true})} class="form-control" placeholder="Enter title"/></div>
                    </div>
                     <div className='row mb-3'>
                           <div className='col- m-auto'><input type="text"{...register("userName",{required:true})} placeholder="Enter UserName" class="form-control" /></div>
                     </div>
                     <div className='row mb-3'>
                     <div className='col- m-auto'><input type="password"{...register("password",{required:true})} class="form-control" placeholder="Enter password"/></div>
=======
                        <div className='col'><input type="text"{...register("firstName",{required:true})} placeholder="Enter FirstName" class="form-control" /></div>
                    {errors.firstName && <span className='text-danger'>First Name is required</span>}
                    </div>
                     <div className='row mb-3'>
                       <div className='col'><input type="text"{...register("lastName",{required:true})} placeholder="Enter LastName" class="form-control" /></div>
                       {errors.lastName && <span className='text-danger'>Last Name is required</span>}
                     </div>
                     <div className='row mb-3'>
                           <div className='col'><input type="text"{...register("email",{required:true})} placeholder="Enter Email" class="form-control" /></div>
                           {errors.email && <span className='text-danger'>Email is required</span>}
                     </div>
                     <div className='row mb-3'>
                     < div className='col'><input type="text"{...register("title",{required:true})} class="form-control" placeholder="Enter Title"/></div>
                     {errors.title && <span className='text-danger'>Title is required</span>}
                    </div>
                     <div className='row mb-3'>
                     < div className='col'><input type="text"{...register("userLevel",{required:true})} class="form-control" placeholder="Enter UserLevel"/></div>
                     {errors.userLevel && <span className='text-danger'>UserLevel is required</span>}
                    </div>
                     <div className='row mb-3'>
                           <div className='col'><input type="text"{...register("userName",{required:true})} placeholder="Enter UserName" class="form-control" /></div>
                           {errors.userName && <span className='text-danger'>UserName is required</span>}
                     </div>
                     <div className='row mb-3'>
                     <div className='col'><input type="password"{...register("password",{required:true})} class="form-control" placeholder="Enter Password"/></div>
>>>>>>> 2dd7876b66559a4a6f12ea043f7b01a16e572462
                           {errors.password && <span className='text-danger'>Provide password</span>}
                      </div>
                    <button type='submit' className='btn btn-primary m-2'>Add</button>
                    <Link to="/admin" className="btn btn-danger"> Cancel </Link>
            </form>	
        </div>
    </div>

    );
};

export default AddUser;