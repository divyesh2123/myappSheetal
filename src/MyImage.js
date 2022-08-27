import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class MyImage extends Component {
    
    constructor(props)
    {
        super(props)
    }

  render() {
    return (
      <>
            <img src={this.props.imagrUrl} alt={this.props.title} />

      </>
    )
  }
}
