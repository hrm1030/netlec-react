/**
 * Signin Firebase
 */

 import React, { Component } from 'react';
 import { Helmet } from "react-helmet";
 import {Applogo, TutorBack, Facebook, Twitter,Instagram} from '../Entryfile/imagepath.jsx'
 
 
 class Registrationpage extends Component {
 
    state = {
       email: 'demo@example.com',
       password: 'test#123',
       repeatpassword:''
    }
 
     /**
      * On User Login
      */
    onUserLogin = e => {
       e.preventDefault();
       
       if (this.state.email !== '' && this.state.password !== '') {
          this.props.signinUserInFirebase(this.state, this.props.history);
 
          
       }
     }
 
    render() {
       const { email, password } = this.state;
       const { loading } = this.props;
       return (
             
             <div className="main-wrapper">
               <div className="row">
                 <div className="col-md-5" style={{marginTop:'90px'}}>
                       <div className="account-box">
                         <div className="account-wrapper">
                           <div className="account-back">
                             <a href="/"><i className="fa fa-long-arrow-left"></i></a>
                           </div>
                           <div style={{marginTop:'10px'}}>
                             <label style={{fontSize:'40px', fontWeight:'bold'}}>Create Your<br/> Tutor Account.</label>
                           </div>
                           <div className="account-footer" style={{textAlign:'left'}}>
                               <p>Already have an account? <a href="/light/login">Login</a></p>
                             </div>
                           
                           {/* Account Form */}
                           <form action="/light/app/main/dashboard" style={{marginTop:'41px'}}>
                             <div className="form-group">
                               <input className="form-control" id="tutor_firstname" type="text" placeholder="First Name"/>
                             </div>
                             <div className="form-group">
                               <input className="form-control" id="tutor_lastname" type="text" placeholder="Last Name"/>
                             </div>
                             <div className="form-group">
                               <input className="form-control" id="tutor_email" type="email" placeholder="Email Address"/>
                             </div>
                             <div className="form-group">
                               <input className="form-control" id="tutor_password" type="password" placeholder="Password" />
                             </div>
                             <div className="form-group">
                               <input type="checkbox"/> <label>Accept Terms & Conditions</label>
                             </div>
                             <label className="text-danger" style={{fontSize:'14px'}} id="valid_tutor_signup">
                              Enter Valid User Info
                            </label>
                             <div className="form-group text-center">
                               <button className="btn btn-primary account-btn" type="button" id="btn_tutor_signup">Register Now</button>
                             </div>
                             <div className="form-group">
                               <p>Or, Log in with</p>
                             </div>
                             <div className="form-group text-center">
                               <button className="btn btn-primary account-with-btn" type="submit">Login with Gmail</button>
                             </div>
                           </form>
                           {/* /Account Form */}
                         </div>
                       </div>
                       <div className="" style={{marginTop:'81.12px',textAlign:'center'}}>
                           <img src={Facebook}/>
                           <img src={Instagram} style={{marginLeft:'5%'}}/>
                           <img src={Twitter} style={{marginLeft:'5%'}}/>
                       </div>
                 </div>
                 <div className="col-md-7">
                   <img src={TutorBack} style={{width:'100%'}} />
                 </div>
               </div>
               
             </div>
         
       );
    }
 }
 
 
 export default Registrationpage;
 