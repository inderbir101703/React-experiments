import { Component } from "react";


class User extends Component{
    componentDidMount(){
        console.log("user component mounted")
    }

constructor(props){
    console.log("user constructor called")
    super(props)
    this.state={
        count:0
    }

}

    render(){
        console.log("user component renderd")
        return <div>
            <button onClick={()=>{this.setState({count:this.state.count+1})}}>+</button>
            <p>name: </p>
            <p>location: {this.props.location}</p>
            <p>contact:</p>
            <p>count: {this.state.count}</p>
        
        </div>
    }
}
export default User