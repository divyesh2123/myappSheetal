import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class UserEmployee extends Component {


    constructor(props)
    {
        
        super(props);
        this.state = {
            counter : 0
        }

        this.myCounter = this.myCounter.bind(this);

    }

    

    updateCounter = ()=> {

        
     
        this.setState({
            counter : this.state.counter +1
        })
        
    }

    myCounter = function()
    {
       
        this.setState({
            counter : this.state.counter -1
        })

    }



  render() {
    return (
      <div>UserEmployee

        {this.state.counter}

        <button onClick={this.updateCounter}>
            MyCounter(+)</button>
        <button name='test' onClick={this.myCounter}>
            MyCounter(-)</button>

      </div>
    )
  }
}
