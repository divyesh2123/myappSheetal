import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class MyTestDataLifeCycle extends Component {
  
    constructor(props)
    {   
        super(props)
        this.state = {
             test : 'This is the data'
        }
    }

    shouldComponentUpdate(preprops,prestate) {
      
      if (prestate.test == this.state.test)
      {
      return false;
      }
      else
      {
        return true;
      }
    }

    componentDidUpdate()
    {
      console.log("this is the component did update");
    }
  
    

    changeMyData = () => {
     
      this.setState({test: "blue"});
    }

  render() {

    console.log("This is for html")
    return (
      <div>{this.state.test}
      <button type="button" onClick={this.changeMyData}>Change color</button>
      </div>
    )
  }
}
