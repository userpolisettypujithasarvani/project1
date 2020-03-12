import React from 'react';
class Data extends React.Component{
    constructor(){
        super();
        this.state={
            count:0/*we can keep any number for count:"10"*/
        }
    }
    countIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    countDecrement=()=>{
        this.setState({count:this.state.count-1})
    }
    render(){
        return(
            <div>
            <h2>{this.state.count}</h2>
            <button onClick={this.countIncrement} >Increment</button>
            <button onClick={this.countDecrement} >Decrement</button>
            </div>
        )
    }
}
export default Data;