import React from 'react'
import { connect } from 'react-redux'
import { IncrementData } from './action/counteraction'

const mapStateToProps = (state) => ({

    counter : state.counter
})


 function CounterReduxWay2({counter, dispatch}) {

    const myIncrement = ()=> {
        dispatch(IncrementData());
    }
  return (
    <div>{counter}
    
    <button onClick={myIncrement}>+</button>
    </div>
  )
}

export default connect(mapStateToProps)(CounterReduxWay2);
