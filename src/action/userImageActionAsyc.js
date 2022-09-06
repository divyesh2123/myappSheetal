import axios from "axios"
import { RequestError, RequestImageAction, RequestSuc } from "./userImageAction"

export const GetUserImageData = ()=> {

  
    return distpatch=> {

      distpatch(RequestImageAction());
    

     
        axios.get("https://reqres.in/api/users?page=1").then(y=> {
            
            
         
            distpatch(RequestSuc(y.data))
       
        }).catch(y=> {
            console.log(y);
            
            distpatch(RequestError(y));
        })

    }

  }