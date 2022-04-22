import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import MailerService from '../services/MailerService';

const Mailer = () => {
    const {handleSubmit}= useForm();

    
        const sendEmail = (data) => {
   const service= new MailerService();
   service.sendEmailTo()
       .then((response) => {
           console.log(response.text);
       }, (error) => {
           console.log(error.text);
       });
   }


   return(
    <div>
        <div className="container">
        <form>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                        <input type="submit" className="btn btn-info" value="Send Message"></input>
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Mailer;