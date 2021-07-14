import React from 'react'
import axios from 'axios';
import { RouteComponentProps } from 'react-router';
import { Redirect } from 'react-router-dom'
type MyProps = {
};

interface RouterParams {
  id: string;
}

interface MyState {
};

class Site extends React.Component<MyProps & RouteComponentProps<RouterParams>, MyState> {
  state = {
    name: "",
    desc: "",
    img: "",
    lat: "",
    long: "",
    redirect: false
  };
  componentDidMount() {


  }
  change = (e: any) => {

    this.setState({ [e.target.name]: e.target.value })
  }
  send = () => {
    const data = {
      "title": this.state.name,
      "content": this.state.desc,
      "lat": this.state.lat,
      "long": this.state.long,
      "image_url": this.state.img
    }
    axios.post("http://localhost:3000/api/v1/posts/", data).then((data) => {


      this.setState({ redirect: true })
    })
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/' />;
    }
    return (
      <div>
        <div className="add-main" >

          <div className="add-main-content">
            <div className="add-top-title">
              Add new city
            </div>
            <div className="add-body">
              <div className="add-body-item">
                <span className="add-body-item-title" >
                  Name
                </span>
              </div>
              <div className="add-body-item">
                <input className="add-body-item-input" onChange={this.change} name="name" type="text" />
              </div>
              <div className="add-body-item">
                <span className="add-body-item-title" >
                  Description
                </span>
              </div>
              <div className="add-body-item">
                <textarea onChange={this.change} className="add-body-item-input" name="desc" rows={3} cols={50} />
              </div>
              <div className="add-body-item">
                <span className="add-body-item-title" >
                  Image
                </span>
              </div>
              <div className="add-body-item">
                <textarea onChange={this.change} className="add-body-item-input item-input-image" name="img" rows={3} cols={60} />
              </div>
              <div className="add-body-item">
                <span className="add-body-item-title" >
                  Lat
                </span>
              </div>
              <div className="add-body-item">
                <input className="add-body-item-input" onChange={this.change} name="lat" type="text" />
              </div>
              <div className="add-body-item">
                <span className="add-body-item-title" >
                  Long
                </span>
              </div>
              <div className="add-body-item">
                <input className="add-body-item-input" onChange={this.change} name="long" type="text" />
              </div>

              <div className="add-body-item">
                <input className="add-body-item-input" onClick={this.send} value="Add" type="button" />
              </div>

            </div>

          </div>

        </div>




      </div>
    );
  }


}

export default Site;
