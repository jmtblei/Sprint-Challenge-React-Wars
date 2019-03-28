import React from 'react';
import './StarWars.css';
import axios from 'axios';
class Species extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      species: []
    }
  }

  componentDidMount(){
    this.getFilm(this.props.species);
  }

  getFilm = URL =>{
    axios(URL)
      .then(res => {
          console.log(res)
        return res.data;
      })
      .then(data => {
        this.setState({species: data});
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  render(){
    console.log(this.props.species)
    return (
      <p>
        <span>Species: </span> 
        {this.state.species.name}
      </p>
    )
  }
}

export default Species;