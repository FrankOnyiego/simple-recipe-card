import React, {useState,useEffect} from 'react'
import Headertwo from './Header2'
import Footer from '../components/Footer'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

function Settings() {
  const[settings,set]=useState([]);
  async function getData() {
    try {
      const response = await axios.get('http://localhost:5000/settings');
      set(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(()=>{
    getData();
  },[])
  return (
   <>
   <Headertwo />
   {settings.map((item)=>(
   <div className="container">
   <div className="row flex-lg-nowrap mt-3">
   
     <div className="col">
       <div className="row">
         <div className="col mb-3">
           <div className="card">
             <div className="card-body">
               <div className="e-profile">
                 <div className="row">
                   <div className="col-12 col-sm-auto mb-3">
                     <div className="mx-auto" style={{width: '140px'}}>
                       <div className="d-flex justify-content-center align-items-center rounded" style={{height: '140px', backgroundColor: 'rgb(233, 236, 239)'}}>
                         <span style={{color: 'rgb(166, 168, 170)', font: 'bold 8pt Arial'}}>140x140</span>
                       </div>
                     </div>
                   </div>
                   <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                     <div className="text-center text-sm-left mb-2 mb-sm-0">
                       <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">{item.cname}</h4>
                       <div className="text-muted"><small>{item.vision}</small></div>
                       <div className="mt-2">
                         <button className="btn btn-primary" type="button">
                           <i className="fa fa-fw fa-camera"></i>
                           <span>Change Photo</span>
                         </button>
                       </div>
                     </div>
                     <div className="text-center text-sm-right">
                       <span className="badge badge-secondary">administrator</span>
                     </div>
                   </div>
                 </div>
                 <ul className="nav nav-tabs">
                   <li className="nav-item"><NavLink to="/settings" className="active nav-link">Settings</NavLink></li>
                 </ul>
                 <div className="tab-content pt-3">
                   <div className="tab-pane active"> 
                   <Formik
    initialValues={{ name: `${item.cname}`, vision: `${item.vision}` ,email: `${item.email}`, mobile: `${item.telephone}`, location: `${item.location}`, twitter: `${item.twitter}`,facebook: `${item.facebook}`,instagram: `${item.instagram}` }}
    validationSchema={SignupSchema}
    onSubmit={(values, { setSubmitting }) => {
      axios.post('http://localhost:5000/updatesettings',values).then((response)=>{
        console.log("operation successful");
      })
      setTimeout(() => {
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form className="bg-light p-5">
      <div className="form-group">
      <label>Company name</label>
        <Field
          type="name"
          name="name"
          placeholder="Company Name"
          className="form-control"
        />
        <ErrorMessage name="name" component="div" className="text-danger" />
      </div>
      <div className="form-group">
      <label>Vision</label>
        <Field
          as="textarea"
          rows={7}
          name="vision"
          placeholder="Company Vision"
          className="form-control"
        />
        <ErrorMessage name="vision" component="div" className="text-danger" />
      </div>
      <div className="form-group">
      <label>Email address</label>
        <Field
          type="email"
          name="email"
          placeholder="Company Email"
          className="form-control"
        />
        <ErrorMessage name="email" component="div" className="text-danger" />
      </div>
      <div className="form-group">
      <label>Mobile phone</label>
        <Field
          type="tel"
          name="mobile"
          placeholder="Company telephone"
          className="form-control"
        />
        <ErrorMessage name="email" component="div" className="text-danger" />
      </div>
      <div className="form-group">
      <label>Location</label>
        <Field
          type="text"
          name="location"
          placeholder="Company location"
          className="form-control"
        />
        <ErrorMessage name="location" component="div" className="text-danger" />
      </div>

      <div className="form-group">
          <label>Facebook</label>
          <Field
            type="text"
            name="facebook"
            placeholder="Facebook Profile URL"
            className="form-control"
          />
           <ErrorMessage name="facebook" component="div" className="text-danger" />
        </div>
        <div className="form-group">
          <label>Twitter</label>
          <Field
            type="text"
            name="twitter"
            placeholder="Twitter Profile URL"
            className="form-control"
          />
           <ErrorMessage name="twitter" component="div" className="text-danger" />
        </div>
        <div className="form-group">
          <label>Instagram</label>
          <Field
            type="text"
            name="instagram"
            placeholder="Instagram Profile URL"
            className="form-control"
          />
           <ErrorMessage name="instagram" component="div" className="text-danger" />
        </div>
      <button type="submit" className="btn btn-success" disabled={isSubmitting}>
        SAVE CHANGES
      </button>
    </Form>
    )}
  </Formik>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
   
         <div className="col-12 col-md-3 mb-3">
           <div className="card mb-3">
             <div className="card-body">
               <div className="px-xl-3">
                 <button className="btn btn-block btn-warning">
                   <i className="fa fa-sign-out"></i>
                   <span>Logout</span>
                 </button>
               </div>
             </div>
           </div>
           <div className="card">
             <div className="card-body">
               <h6 className="card-title font-weight-bold">Support</h6>
               <p className="card-text">Get fast, free help from our friendly assistants.</p>
               <button type="button" className="btn btn-primary">Contact Us</button>
             </div>
           </div>
         </div>
       </div>
   
     </div>
   </div>
   </div>
   ))
   }
<Footer />
   </>
  )
}

export default Settings
