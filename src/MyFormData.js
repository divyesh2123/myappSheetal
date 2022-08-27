import React, { useEffect, useState } from 'react'

export default function MyFormData() {

   const [data,setData]= useState({

    firstName : "",
    lastName : "",
    email : "",
    zipcode : "",


    });


    const [error,setError]= useState({

        firstName : "",
        lastName : "",
        email : "",
        zipcode : "",
    }) ;

 const changeInput = (e)=> 
    {

            const {name,value} = e.target;

            setData({...data,[name] : value});

           var mymessgae = myValidation(name,value);

           setError({...error,[name]: mymessgae});

    }

    const myValidation = (name,value)=> {

        switch(name)
        {
             case "firstName" :

             if(!value)
             {
                return "FirstName is required";
             }

             break;

             case "lastName" :
                if(!value)
                {
                   return "LastName is required";
                }

                break;

                case "email" :
                    if(!value)
                    {
                       return "email is required";
                    }
    
                    break;

                case "zipcode":

                if(!value)
                {
                    return "ZipCode is required";
                }

                break;



        }

    }

    const mySubmit = (e)=> {

    }


  return (
    <div>
        <form onSubmit={mySubmit}>

            <label>
                FirstName
            </label>

            <input type="text" name='firstName' 
            onChange={changeInput}
            onBlur={changeInput}
            />

            {error?.firstName}

            <label>
                LastName
            </label>

            <input type="text" name='lastName' 
            onChange={changeInput}
            onBlur={changeInput}
            />

            {error?.lastName}

            
            <label>
            email
            </label>

            <input type="text" name='email' 
            onChange={changeInput}
            onBlur={changeInput}
            />

            {error?.email}



        </form>

    </div>
  )
}
