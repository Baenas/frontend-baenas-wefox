import React from 'react'
import axios from 'axios';
import { stat } from 'fs';
type MyProps = {
  // using `interface` is also ok
  message: string;
};

class Test {
  title: string
  constructor() {
    this.title = "";
  }
 
}

interface MyState  {
  posts: Array<{title: string}>; // like this
};

class Main extends React.Component<MyProps, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    posts: []
  };
  componentDidMount(){
    axios.get("http://localhost:3000/api/v1/posts").then((data) => {
    this.setState({posts : data.data })
    
    })
    }

   display = () => {
    console.log(this.state.posts)

    
   return  this.state.posts.map((contenido,i ) => {
      return(
        <div key={i}>
          {contenido.title}
        
        </div>
      )
    })
}
  render() {
  
    return (
      <div>
        {this.display()}
      </div>
    );
  }
}
export default Main;