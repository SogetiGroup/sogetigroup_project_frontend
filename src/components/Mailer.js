import React from 'react';

const Mailer = () => {
    return (
        <div className='container'>

            <h1>Send Email Form</h1>

            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <form className='row'>
            <div class="form-label-group">
                <label>Name</label>
                <input type='text' name='name' class="form-control m-auto mb-2"/>
            </div>

            <div class="form-label-group">
                <label>Email</label>
                <input type='email' name='user-email' class="form-control m-auto mb-2"/>
                </div>

                <label>Message</label>
                <textarea name='message' rows='4'/>
                <input type='submit' value='send'/>

            </form>
            </div>
        </div>
    );
};

export default Mailer;