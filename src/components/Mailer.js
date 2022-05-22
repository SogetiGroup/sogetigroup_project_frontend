import { useState } from 'react';
import MailerService from '../services/MailerService';

const Mailer = () => {

    const [message, setMessage] = useState({value: '',type: ''});
    const [reload, setReload] = useState();
    
    const sendEmail = () => {
   const service= new MailerService();
   service.sendEmailTo().then((response) => {
    if(response.exists()) { 
        console.log(response.text);
        setMessage({value: "Mail was successfully sent!", type: "success"});
} else {
    setMessage({value: "API Error!", type: "danger"});
}  
    
       });
   }


   return(
    <div>
        <div className="container">
        <div className='col-xs-10 col-sm-8 p-sm-5 '>
        <form>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    </div>
                    <div className="row col-8 pt-3 mx-auto">
                        <button type='button' className='btn btn-info' onClick={() => sendEmail()}>Send Email</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    </div>
    );
};

export default Mailer;