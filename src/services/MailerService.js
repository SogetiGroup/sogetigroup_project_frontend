import axios from "axios";
const Base_URL="http://localhost:8080/api/v1/mail/";

class MailerService {

    sendEmailTo = async(data) => {
        return await axios.post(Base_URL, data).then(response => response);
    };
    
    verifyEmailByTicketId = async(id) => {
        return await axios.get(Base_URL, id).then(response => response);
    };

}
export default MailerService;