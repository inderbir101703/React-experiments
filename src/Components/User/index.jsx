import { Component } from "react";
import UserContext from "../../utils/UserContext";

class User extends Component{




    async componentDidMount(){
        console.log("user component mounted")
        const response=await fetch('https://api.github.com/users/inderbir101703')
        const data= await response.json()
        this.setState({info:data})
        console.log("user constructor called",data)
    }

constructor(){
 
    super()

    this.state={
        info:{
        name:'loading',
        location:'loading',
        avatar_url:'loading'
        }
    }
}

    render(){
        const {location,name,avatar_url}=this.state.info
        console.log("user component renderd")
        return <div>
            <button onClick={()=>{this.setState({count:this.state.count+1})}}>+</button>
            <p>name:{name} </p>
            <UserContext.Consumer>
                {data=>data?.loggedinUser}
            </UserContext.Consumer>
            <img src={avatar_url}/>
            <p>location: {location}</p>
            <p>contact:</p>
            <p>count: {this.state.count}</p>
        
        </div>
    }
}
export default User