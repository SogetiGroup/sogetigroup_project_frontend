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


    return (
        <div className='container'>

            <h1>Send Email Form</h1>

            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <form className='row' onSubmit={handleSubmit(sendEmail)}>
            <div class="form-label-group">
                <label>Name</label>
                <input type='text' name='name' class="form-control m-auto mb-2"/>
            </div>

            <div class="form-label-group">
                <label>Email</label>
                <input type='email' name='user-email' class="form-control m-auto mb-2"/>
                </div>

            <div className='row mb-2 '>
                <label>Message</label>
                <textarea name='message' rows='4'/>
            </div>
                
                <button type='submit' className='m-auto btn btn-primary' onClick={() => Mailer()}>Send</button>

            </form>
            </div>
        </div>
    );
};

export default Mailer;