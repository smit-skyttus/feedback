import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';


const validate = values => {

    function validateAge(dateOfBirth) {
        const today = new Date();
        const dob = new Date(dateOfBirth);
        
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
          age-- ;
        }
        // console.log(age);
        return age < 18;
      }
      
      
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }
  
    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if(!values.mobile){
        errors.mobile = 'Required';
    }else if(!/^[7-9][0-9]{9}$/i.test(values.mobile) ){
        errors.mobile = 'Invalid mobile number';
    }
    if(!values.dob){
        errors.dob = 'Required';
    }
    else if(validateAge(values.dob)){
        errors.dob = 'Must be 18 years old';
    }
    
    return errors;
  };

const CreateUser = () => {

    const url = "https://localhost:7081/api/Employees";

   
    
    const onSubmit = (data) =>{
        data.mobile = data.mobile.toString();
        axios.post(url,data).then(res=>{
            console.log(res);
        })
        window.location.href = "/";
    }

    const formik = useFormik({
        initialValues: {
          employeeId:0,
          firstName: '',
          lastName: '',
          mobile:'',
          dob:'',
          email: '',
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      return (
        <div>
        <h2>Add User</h2>
        <br/> <br/>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <br/>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
            {formik.errors.firstName ? <div> {formik.errors.firstName}</div> : null}
            <br/><br/>
          <label htmlFor="lastName">Last Name</label>
          <br/>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
           {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
          <br/><br/>

          <label htmlFor="mobile">Mobile</label>
          <br/>
          <input
            id="mobile"
            name="mobile"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.mobile}
          />
           {formik.errors.mobile ? <div>{formik.errors.mobile}</div> : null}
          <br/><br/>

          <label htmlFor="dob">Date of Birth</label>
          <br/>
          <input
            id="dob"
            name="dob"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.dob}
          />
          {formik.errors.dob ? <div>{formik.errors.dob}</div> : null}
          <br/><br/>
    
          <label htmlFor="email">Email Address</label>
          <br/>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
           {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            <br /><br />
            
          <button type="submit" onClick={()=>onSubmit(formik.values)}>Submit</button>
        
        </form>
        </div>
      );
}

export default CreateUser