import React, { Component } from 'react'

export default class ChuckNorrisComponent extends Component {
constructor() {
    super();
    this.state = {
        joke: '',
        img: '',
    }
}

jokeHandler = () => {
    fetch("https://api.chucknorris.io/jokes/random")
    .then((resp) => resp.json())
    .then((respJSON) => {
        this.setState({
            joke: respJSON.value,
            img: respJSON.icon_url
        });
    }) 

    }

  render() {
    return (
      <div className="container col-md-6">
      <img id="chuckimg" src={this.state.img} alt="chuckie img"></img>
      <br />
      <p>{this.state.joke}</p>
      <br />
      <button onClick={this.jokeHandler} className="btn btn-success btn-sm">Get a Joke</button>     
      </div>
    )
  }
}
