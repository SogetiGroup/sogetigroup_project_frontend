import React, { Fragment } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import AddUser from './AddUser';
import Admin from './Admin';
import Mail from './Mail';
import UpdateUser from './UpdateUser';
import Invitation from './Invitation';
import App from './App';
import Time from './Time';

const UserRouter = () => {
    return (
        <Fragment>
                <div className='container'>
                    <Router>
                        <Header/>
                        <Switch>
                            <Route exact path="/" component={Welcome}/>
                            <Route path="/home" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/contact" component={Contact}/>
                            <Route path="/login" component={LogIn}/>
                            <Route path="/admin" component={Admin}/>
                            <Route path="/add" component={AddUser}/>
                            <Route path="/email" component={Mail}/>
                            <Route path="/update/:id" component={UpdateUser}/>
                            <Route path="/invitation" component={Invitation}/>
                            <Route path="/app" component={App}/>                          
                            <Route path="/times" component={Time}/>                          

                            <Route component={NotFound}/>
                        </Switch>
                    </Router>
                </div>
        </Fragment>
       
    );
};
const Welcome=()=><h5>Welcome Page</h5>
const Home=()=><h5>Home Page</h5>
const About=()=><h5>About Us Page</h5>
const NotFound = () => <b>Page Not Found</b>;

const Contact=()=>
            <div class="container ">         
                <div class="col-xs-12 col-sm-10 offset-sm-1 p-sm-5 ">
                    <form className='form-control m-2 p-3'>
                        <div class="panel-body text-center text-black"><h4 class="flexi shadow border-b">CONTACT US</h4></div>
                             <div class="col-8 form-group pt-3 mx-auto">
                                <div class="col-sm-14 m-auto"><input type="text" placeholder="Enter Name" class="form-control" /></div>
                            </div>
                             <div class="col-8 form-group pt-3 mx-auto">
                                   <div class="col-sm-14 m-auto"><input type="text" placeholder="Enter Email" class="form-control" /></div>
                             </div>
                             <div class="col-8 form-group pt-3 mx-auto">
                                   <div class="col-sm-14 m-auto"><input type="text" placeholder="Enter Subject" class="form-control" /></div>
                             </div>
                             <div className="col-8 form-group pt-3 mx-auto">
                                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                            </div>
                            <div class="col-8 form-group pt-3 mx-auto"> 
                                 <div class="row col-3 pt-2 mx-auto"><button type="submit" class="btn btn-info btn-block">Send message</button></div>
                            </div>
                    </form>	
                </div>
            </div>


const LogIn=()=>
    <div class="container">
    <div class="row ">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin m-5">
                <div class="card-body">
                    <h5 class="card-title text-center">LogIn</h5>
                    <form class="form-signin ">
                        <div class="form-label-group">
                            <input type="text" id="email" name="email"
                                placeholder="Enter Email" class="form-control m-auto mb-2" /> 
                        </div>
                        <div class="form-label-group">
                            <input type="password" placeholder="Enter Password" id="password"
                                name="password" class="form-control m-auto mb-2"/>  
                        </div>
                        <div class="custom-control custom-checkbox mb-3 px-2">
                            <input type="checkbox" class="custom-control-input"
                                id="customCheck1"/>
                                <label class="custom-control-label"
                                for="customCheck1">Remember password</label>
                        </div>
                        <button class="btn btn-md btn-primary btn-block px-3 m-3 "
                            type="submit">LogIn</button>
                            <p class="small mb-5 pb-lg-2 px-3"><a class="text-muted" href="#!">Forgot password?</a></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>


const Header=()=>{
    return (
        <Fragment>
            <nav className='navbar navbar-expand-sm navbar-blue bg-blue flexi shadow border-b'>
                <div className='container-fluid'>
                    <ul className='navbar-nav me-auto'>
                        <li className='nav-item'>
                        <Link className="navbar-brand" to="/">
                         <img src='logo-white.jpg'width="40" alt=''/></Link>  
                        </li>
                        <li className='nav-item'>
                            <Link className="navbar-brand" to="/home" >Home </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="navbar-brand" to="/about" >About Us </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="navbar-brand" to="/contact" >Contact Us </Link>
                        </li>
                    </ul>
                    <form>                  
                         <Link type='button' className='btn btn-outline-primary' to="/login">LogIn</Link>
                    </form>              
                </div>
            </nav>
        </Fragment>
    );
};

export default UserRouter;