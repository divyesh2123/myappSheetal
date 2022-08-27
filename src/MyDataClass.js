import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class MyDataClass extends Component {
 


        state = {

            firstName : "",
            lastName : "",
            address : "",
            city : "",
            stateInfo: "",
            country : ""

        }

    myInputHanler = (e)=>
    {
            console.log(e.target);
            console.log(this.state);
         this.setState({[e.target.name] : e.target.value})
    }

    myFormSubmitHandler = (e)=> {

        e.preventDefault();

        

        console.log(this.state)
    }
    

  render() {
    return (
      <div>

        <form onSubmit={this.myFormSubmitHandler}>

            <input type="text" name='firstName' onChange={this.myInputHanler}/>
            <input type="text" name='lastName' onChange={this.myInputHanler}/>
            <input type="text" name='address'  onChange={this.myInputHanler}/>
            <input type="text" name='city'  onChange={this.myInputHanler}/>
            <input type="text" name='stateInfo'  onChange={this.myInputHanler}/>
            <input type="text" name='country'  onChange={this.myInputHanler}/>
            <input type="submit" value="save" />

        </form>



      </div>
    )
  }
}
