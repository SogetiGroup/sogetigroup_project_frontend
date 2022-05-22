import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserService from '../services/UserService';

const AddUser = () => {
    const [user,setUser]= useState([]);
    const {register,handleSubmit,formState:{errors}}= useForm();
    const [message,setMessage]=useState({value:"",type:""});
    const [reload, setReload] = useState(false);
    const history= useHistory();

    const saveUser=(data)=>{
        console.log(data);
        const service = new UserService();
        service.saveUser(data).then(response=>{
            if (response.status===201) {
              setUser(response.data);
              setMessage({value: 'Operation is done for person Id:' + response.data.id , type: 'success'});
             history.push("/admin");
              setReload(!reload);
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
                        <div className='col- m-auto'><input type="text"{...register("firstName",{required:true})} placeholder="Enter FirstName" class="form-control" /></div>
                    {errors.firstName && <span className='text-danger'>First Name is required</span>}
                    </div>
                     <div className='row mb-3'>
                       <div className='col-m-auto'><input type="text"{...register("lastName",{required:true})} placeholder="Enter LastName" className="form-control" /></div>
                       {errors.lastName && <span className='text-danger'>Last Name is required</span>}
                     </div>
                     <div className='row mb-3'>
                           <div className='col- m-auto'><input type="text"{...register("email",{required:true})} placeholder="Enter Email" className="form-control" /></div>
                           {errors.email && <span className='text-danger'>Email is required</span>}
                     </div>
                     <div className='row mb-3'>
                     < div className='col- m-auto'><input type="text"{...register("userTitle",{required:true})} className="form-control" placeholder="Enter userTitle"/></div>
                     {errors.userTitle && <span className='text-danger'>UserTitle is required</span>}
                    </div>
                     <div className='row mb-3'>
                           <div className='col- m-auto'><input type="text"{...register("userLevel",{required:true})} placeholder="Enter UserLevel" className="form-control" /></div>
                           {errors.userLevel && <span className='text-danger'>UserLevel is required</span>}
<<<<<<< HEAD
=======
                     </div>
                     <div className='row mb-3'>
                           <div className='col- m-auto'><input type="text"{...register("userName",{required:true})} placeholder="Enter UserName" className="form-control" /></div>
                           {errors.userName && <span className='text-danger'>UserName is required</span>}
                     </div>
                     <div className='row mb-3'>
                           <div className='col- m-auto'><input type="text"{...register("password",{required:true})} placeholder="Enter Password" className="form-control" /></div>
                           {errors.password && <span className='text-danger'>Password is required</span>}
>>>>>>> c1ee67a63217c55f4ea93a2169f9cac1c8841d88
                     </div>
                    <button type='submit' className='btn btn-primary m-2'>Add</button>
                    <Link to="/admin" className="btn btn-danger"> Cancel </Link>
            </form>	
        </div>
    </div>

    );
};

export default AddUser;