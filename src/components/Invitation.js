import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import InvitationService from '../services/InvitationService';


const Invitation = () => {

    const [users,setUsers]= useState();
    const [message,setMessage]= useState({value:"",type:""});
    const [reload, setReload] = useState(false);
    const params = useParams();
    const history = useHistory();
    const [invitation, setInvitation] = useState([]);
    const {register,handleSubmit,formState:{errors}}= useForm();

    

    useEffect(() => {
        const service = new InvitationService();
        service.getAllInvitations().then((response) => {
            console.log(response);
            if (response.status === 200) {
                setUsers(response.data);
                setMessage({value: "All invitations fetched", type: "success"});
            } else {
                setMessage({value: "Failed", type: "danger"});
            }
        })
    }, [reload]);
    
    const saveInvitation=(data)=>{
        const service = new InvitationService();
        service.saveInvitation(data).then(response=>{
            console.log(data);
            if (response.status===201) {
              setInvitation(response.data);
              setMessage({value: 'Invitation saved' + response.data.id , type: 'success'});
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
            <form className='form-control m-2 p-3' onSubmit={handleSubmit(saveInvitation)}>
                     <div className='row mb-3'>
                        <div className='col- m-auto'><input type="calender"{...register("date",{required:true})} placeholder="Date" className="form-control" /></div>
                    {errors.date && <span className='text-danger'>Date is required</span>}
                    </div>
                     <div className='row mb-3'>
                       <div className='col-m-auto'><input type="text"{...register("time",{required:true})} placeholder="Time" className="form-control" /></div>
                       {errors.time && <span className='text-danger'>Time is required</span>}
                     </div>
                     <div className='row mb-3'>
                           <div className='col- m-auto'><input type="text"{...register("place",{required:true})} placeholder="Place" className="form-control" /></div>
                           {errors.place && <span className='text-danger'>Place is required</span>}
                     </div>
                     <div className='row mb-3'>
                     < div className='col- m-auto'><input type="text"{...register("dresscode",{required:true})} className="form-control" placeholder="Dresscode"/></div>
                     {errors.dresscode && <span className='text-danger'>DressCode is required</span>}
                    </div>
                    <div className='row mb-3'>
                           <div className='col- m-auto'><input type="text"{...register("cost",{required:true})} placeholder="Cost" className="form-control" /></div>
                           {errors.cost && <span className='text-danger'>Cost is required</span>}
                    </div>
                    <div className="row mb-3 form-group  mx-auto">
                                <textarea className="form-control" id="" cols="40" rows="6" placeholder="Menu" name="menu"></textarea>
                                {errors.menu && <span className='text-danger'>Menu is required</span>}
                            </div>
                    <div className='row mb-3 form-group mx-auto'>
                            <textarea className="form-control" id="" cols="40" rows="3" placeholder="Entertainment" name="entertainment"></textarea>
                           {errors.entertainment && <span className='text-danger'>Entertainment is required</span>}
                    </div>
                    <button type='submit' className='btn btn-primary m-2'>Save</button>
                    <Link to="/admin" className="btn btn-danger"> Cancel </Link>
            </form>	
        </div>
    </div>
    );
};

export default Invitation;