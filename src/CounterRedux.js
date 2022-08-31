import React from 'react'
import { connect } from 'react-redux'
import { IncrementData } from './action/counteraction'


export const CounterRedux = (props) => {

    console.log(props);
  return (
    <div>{props.counter}</div>
  )
}

const mapStateToProps = (state) => ({ 

    counter : state
})

const mapDispatchToProps = (dispatch) => ({

    increment : () => {

        dispatch(IncrementData())
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux)