import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { getPopulation } from '../../services/apiService';
import GnomeCard from '../common/gnomeCard/GnomeCard';
import Filters from '../filters/Filters';
import './Index.css';


class Index extends Component {
  constructor(){
    super();
    this.state = {
      population: []
    };
  }
  componentWillMount() {
    getPopulation()
      .then(data => {
        this.setState({
          population: data.Brastlewark
        })
     })
  }


  render() {
    console.log(this.state.population);
    return (
      <div className="index-wrapper row">
        <div className='col s12 m3'>
          <Filters/>
        </div>
        <div className="row col s12 m9 offset-m3 gnomeCard">
        {this.state.population && this.state.population.map((gnomeInfo, index)=>{
          return(
          <GnomeCard
          key={index}
          data={gnomeInfo}/>)
        })}
        </div>
      </div>
    );
  }
}

export default Index;
