import React from 'react'
import { connect } from 'react-redux'
import { IncrementData,DecrementData } from './action/counteraction'

const mapStateToProps = (state) => ({

    counter : state.counter
})


 function CounterReduxWay3(props) {
  return (
    <div>{props.counter}
    
        <button onClick={()=> {
                props.IncrementData()
        }}>+</button>
        <button onClick={()=> {
                props.DecrementData()
        }}>-</button>
    </div>
  )
}

export default connect(mapStateToProps,{IncrementData,DecrementData})(CounterReduxWay3)
