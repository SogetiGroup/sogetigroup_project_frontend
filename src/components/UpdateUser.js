import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const UpdateUser = () => {

const {register,handleSubmit,formState:{errors}}= useForm();

  


    return (
        <div className='container'>         
        <div className='col-xs-10 col-sm-8 p-sm-5 '>
            <form className='form-control m-2 p-3' onSubmit={handleSubmit(UpdateUser)}>
                     <div className='row mb-3'>
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
                           {errors.password && <span className='text-danger'>Provide password</span>}
                      </div>
                    <button type='submit' className='btn btn-primary m-2'>Add</button>
                    <Link to="/admin" className="btn btn-danger"> Cancel </Link>
            </form>	
        </div>
    </div>

    );
};


export default UpdateUser;