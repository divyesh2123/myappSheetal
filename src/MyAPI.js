import axios from 'axios'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class MyAPI extends Component {

    
        state = {
            data : []
        }
    
  
    componentDidMount()
    {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(y=> {
            console.log(y.data)

            this.setState({data : y.data});
        });
    }

  render() {

 
    return (
      <div>{ 
        this.state.data.map((t)=> {

            return(<div>{t.email} </div>)
        })
      }
        </div>
    )
  }
}
