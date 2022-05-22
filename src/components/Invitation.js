import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InvitationService from '../services/InvitationService';

const Invitation = () => {

    const [users,setUsers]= useState();
    const [message,setMessage]= useState({value:"",type:""});
    const [reload, setReload] = useState(false);
    const params = useParams();

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
    
    return (
        <div>
            
        </div>
    );
};

export default Invitation;