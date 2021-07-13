import React from 'react'
import axios from 'axios';
type MyProps = {
};



interface MyState {
  posts: Array<{ id: number, title: string, content: string, lat: string, long: string, image_url: string }>;
};

class Main extends React.Component<MyProps, MyState> {
  state: MyState = {
    posts: [],

  };
  //load the data from the api
  componentDidMount() {
    axios.get("http://localhost:3000/api/v1/posts").then((data) => {

      //save to state
      this.setState({ posts: data.data })

    })
  }
  remove = (id: number) => {
    axios.delete("http://localhost:3000/api/v1/posts/" + id).then((data) => {

      axios.get("http://localhost:3000/api/v1/posts").then((data) => {

        //save to state
        this.setState({ posts: data.data })

      })

    })
  }
  render() {

    return (
      <div>

        <div className="cards-container">
          <div className="  card-main" >
            <a href={'/add'}>
              <div className="card-top  ">
                <img className="card-image" src="data:image/png;base64,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"></img>
                <div className="card-title">
                  Add new
                </div>
              </div>
            </a>
          </div>
          {this.defaulCards()}
        </div>
      </div>
    );
  }
  //display the main cards of locations
  defaulCards = () => {
    return this.state.posts.map((contenido, i) => {
      return (
        <div className="  card-main" key={i}>

          <div className="card-top  ">
            <a href={'/site/' + contenido.id}>

              <img className="card-image" src={contenido.image_url} />
            </a>
            <div className="card-title">
              {contenido.title}
              <br></br>


              <button type="submit" onClick={() => { this.remove(contenido.id) }} className="card-button">Remove</button>

            </div>
          </div>


        </div>
      )
    })
  }
}
export default Main;