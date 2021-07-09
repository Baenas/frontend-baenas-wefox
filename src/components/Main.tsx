import React from 'react'
import axios from 'axios';
type MyProps = {
  // using `interface` is also ok
  message: string;
};
type MyState = {
  posts: object; // like this
};
class Main extends React.Component<MyProps, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    posts: []
  };
  componentDidMount(){
    axios.get("http://localhost:3000/api/v1/posts").then((data) => {
    this.setState({posts: data.data})
    })
  }
  render() {
    return (
      <div>
    a
      </div>
    );
  }
}
export default Main;