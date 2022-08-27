import React from 'react'
import {Form, Formik,Field, ErrorMessage, yupToFormErrors} from 'formik'
import * as Yup from 'yup';
export default function BasicForm() {

  const myValidation = (empData)=> {

    console.log(empData);
    var obj = {};

    if(!empData.firstName )
    {
      obj.firstName = "Please Enter the firstName"
    }

    if(!empData.lastName )
    {
      obj.lastName = "Please Enter the lastName"
    }

    if(!empData.email )
    {
      obj.email = "Please Enter the email"
    }

    if(empData.checked.length <=0 )
    {
      obj.checked = "Please select atlest one option"
    }

    return obj;
  }

  const myValidationSchema = (empData)=> {
    return Yup.object().shape({
      firstName: Yup.string().required("Please enter firstName"),
      lastName: Yup.string().required("Please enter lastname"),
      email: Yup.string().required("Please enter email").email("Please enter valid emaildId"),
      checked: Yup.array().min(1,"Please select atlest one"),
      country : Yup.string().required("Please enter country"),
      gender: Yup.string().required("Please select the gender"),
      password: Yup.string().required("Please enter the password"),
      confirmPassword: Yup.string().
      required("please select confirm password")
      .oneOf([null,Yup.ref('password')], "password and confirm password should be match")
    });

  }

    
  return (
    <div>
        <Formik initialValues={

            { firstName: '',
            lastName: '',
            email: '',
            checked: [],
            country : "",
            gender: "",
            password:"",
            confirmPassword: ""

            }

            

        }

        validationSchema = {myValidationSchema}
        
        
        onSubmit={ (values) => {
            
            alert(JSON.stringify(values));
          }}
        
        
        
        >

            <Form>

            <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName"
         placeholder="Please enter firstname"  type="text"/>

<ErrorMessage name='firstName'
         component="div"
         className="text-danger"
         />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" type="text" />

        <ErrorMessage name='lastName'
         component="div"
         className="text-danger"
         />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          
        />
        <ErrorMessage name='email'
         component="div"
         className="text-danger"
         />

        <div>
            <label>
              <Field type="checkbox" name="checked" value="One" />
              One
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Two" />
              Two
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              Three
            </label>
          </div>

          <ErrorMessage name='checked'
         component="div"
         className="text-danger"
         />

          <Field
             component="select"
             id="location"
             name="country"
             multiple={false}
           >

<option value="NY">New York</option>
             <option value="SF">San Francisco</option>
             <option value="CH">Chicago</option>
             <option value="OTHER">Other</option>
            
           </Field>

           <ErrorMessage name='country'
         component="div"
         className="text-danger"
         />


<Field
          id="password"
          name="password"
          placeholder=""
          type="password"
          
        />
        <ErrorMessage name='password'
         component="div"
         className="text-danger"
         />


<Field
          id="confirmPassword"
          name="confirmPassword"
          placeholder="jane@acme.com"
          type="password"
          
        />
        <ErrorMessage name='confirmPassword'
         component="div"
         className="text-danger"
         />







           <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="gender" value="Male" />
              Male
            </label>
            <label>
              <Field type="radio" name="gender" value="Female" />
              Female
            </label>
            <div>Picked: </div>
          </div>



        <button type="submit">Submit</button>

            </Form>


        </Formik>

    </div>
  )
}
