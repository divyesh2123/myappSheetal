import PropTypes from 'prop-types'
import React, { Component } from 'react'
import MyImage from './MyImage';


 class MyAnotherExample extends Component {
  
    state = {

        data : []

        
    }

   
    

    componentDidMount()
    {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(y=> y.json())
        .then(y=> {
            this.setState({...this.state ,data : y});
        })


    }



  render() {

    const { invoiceId } = this.props.route.params;

    console.log(this.state);
    return (
        <>
        <div>{invoiceId}</div> 
            {
               
                this.state.data.map((element)=> {

                    return (<div> {element.albumId}
                    
                        <MyImage imagrUrl={element.url} alt={element.title}/>
                    </div>)

                })


            }
        
        
        </>
    )       
  }
}

export default MyAnotherExample;