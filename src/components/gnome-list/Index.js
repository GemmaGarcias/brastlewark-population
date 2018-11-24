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
      population: [],
      hairFilter: []
    };
  }
  componentWillMount() {
    getPopulation()
      .then(data => {
        this.setState({
          population: data.Brastlewark,
        })
     });
     this._getHairFilter();
  }

  _getHairFilter= ()=>{
    let hairColourList= [];
    this.state.population.forEach((population, index)=>{
      if(hairColourList.indexOf(population.hair_color) != -1){
        hairColourList.push(population.hair_color)
      }
    })
  }


  render() {
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
