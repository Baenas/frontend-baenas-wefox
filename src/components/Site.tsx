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
    title: "",
    content: "",
    lat: "",
    long: "",
    image_url: "",
    posts: {
      title: "", content: "", image_url: "", lat: "", long: ""
    },
    edit: false,

  };
  componentDidMount() {

    axios.get("http://localhost:3000/api/v1/posts/" + this.props.match.params.id).then((data) => {

      //save to state
      this.setState({ posts: data.data })
      this.setState({ title: this.state.posts.title, content: this.state.posts.content, lat: this.state.posts.lat, long: this.state.posts.long, image_url: this.state.posts.image_url })

    })
  }

  update = () => {
    const data = {
      "title": this.state.title,
      "content": this.state.content,
      "lat": this.state.lat,
      "long": this.state.long,
      "image_url": this.state.image_url
    }


    axios.put("http://localhost:3000/api/v1/posts/" + this.props.match.params.id, data).then((data) => {

      //save to state
      this.setState({ posts: data.data, edit: false })



    })

  }
  changeValue = () => {
  }
  change = (e: any) => {



    this.setState({ [e.target.name]: e.target.value })


  }
  render() {

    const { posts } = this.state;
    return (
      <div>
        <div className="site-top" >

          <div className="site-image site-content">

            <h2>
              {this.state.edit ? <input className="add-body-item-input-edit" defaultValue={posts.title} onChange={this.change} name="title" type="text" /> : posts.title}

              <div className="latlong">

                Latitude :
                {this.state.edit ? <input className="add-body-item-input" defaultValue={posts.lat} onChange={this.change} name="lat" type="text" /> : posts.lat}



              </div>
              <div className="latlong">

                Longitude :   {this.state.edit ? <input className="add-body-item-input" defaultValue={posts.long} onChange={this.change} name="long" type="text" /> : posts.long}



              </div>
            </h2>

          </div>
          <div className="site-image">
            <br></br>
            {this.state.edit ? <textarea onChange={this.change} className="add-body-item-input" defaultValue={posts.image_url} name="image_url" rows={4} cols={60} /> : <img src={posts.image_url} />}

          </div>
          <div className="site-image site-content">
            {this.state.edit ? <textarea onChange={this.change} className="add-body-item-input" defaultValue={posts.content} name="content" rows={4} cols={60} /> : posts.content}

          </div>
        </div>
        {this.state.edit ?
          <button type="submit" onClick={() => { this.update() }} className="card-button-edit">Done</button>
          :
          <button type="submit" onClick={() => { this.setState({ edit: true }) }} className="card-button-edit">Edit</button>
        }

        <div className="site-image site-content">
          <iframe
            width="600"
            height="450"

            loading="lazy"
            src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyBLowoZrNlulAkaeNnLzypk3rWXxjZvI1I&q= " + posts.lat + "  ," + posts.long}>
          </iframe>
        </div>


      </div >

    );
  }


}

export default Site;
