import axios from "axios";

const Base_URL = "http://localhost:8080/api/v1/invitations/"

class InvitationService {

    getAllInvitations = async () => {
        return await axios.get(Base_URL).then(response => response);
    };

    getInvitationsById = async (id) => {
        return await axios.get(Base_URL + id).then(response => response);
    };  

    saveInvitation = async (data) => {
        return await axios.post(Base_URL, data).then(response => response);
    };

    updateInvitation = async (data, id) => {
        return await axios.put(Base_URL + id, data).then(response => response);
    };
    
    deleteInvitationById = async (id) => {
        return await axios.delete(Base_URL + id).then(response => response);
    };

}

export default InvitationService;