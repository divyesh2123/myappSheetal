import React from "react";
import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";


const MyHoc = (Component) => ({...props}) => (
    <div>
  <MyHeader/>

      <div style={{ position: "absolute", left: "340px" }}>
        <Component {...props}/>

      
       
      </div>
      
      <MyFooter/>
    </div>
  );

export default MyHoc;