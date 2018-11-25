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
      populationResults:[],
      filterHair:{
        filterOptions: [],
        selected_colors: []
      },
      filterProfession:{
        filterOptions: []
      }
    };
  }

  componentWillMount() {
    // Get data fromm API:
    getPopulation()
      .then(data => {
        this.setState({
          population: data.Brastlewark,
          populationResults: data.Brastlewark
        },()=>{
          this._getHairFilter();
          this._getProfessionFilter();
        })
     });
  }

//----Get filter options from all the results:
  _getHairFilter= ()=>{
    let filterOptions= [];

    this.state.population.forEach(
      (population, index)=>{
      if(filterOptions.indexOf(population.hair_color) === -1){filterOptions.push(population.hair_color)}
    });
    let newFilters = filterOptions.reduce((acc, cur, i) =>{
      acc[i] = {'name': cur, 'selected': false};
      return acc;
    }, []);
    this.setState({
      filterHair: {...this.state.filterHair, filterOptions: newFilters}
    });
  }

  _getProfessionFilter= ()=>{
    let filterOptions= [];
    this.state.population.forEach(
      (population, index)=>{
      if(filterOptions.indexOf(population.professions) === -1){filterOptions.push(population.professions)}
    });

    this.setState({
      filterProfession:{...this.state.filterProfession, filterOptions}
    });
  }

//----Update options filter clicked:
  _handleClickColorFilter= (selected, filterTypes) =>{

    let color_value= selected;
    let filterType= filterTypes;
    let aSelection= this.state.filterHair.selected_colors;

    let i = aSelection.indexOf(color_value);

    if ( i !== -1 ) {
        aSelection.splice( i, 1 );
    } else {
        aSelection.push(color_value)
    };

    this.state.filterHair.filterOptions.map((color, index)=>{
      if(aSelection.indexOf(color.name) !== -1){
        color.selected = true
      } else {
        color.selected = false
      }
      return color
    })

    this.setState({
      filterHair: {...this.state.filterHair, selected_colors: aSelection}
    }, ()=>{
      this._updatePopulationByFilter(aSelection)
    });
  }

//----Filter population by FILTERTYPE

  _updatePopulationByFilter =(selection)=>{

    let populationResults = this.state.population.filter(
      (item, index)=>{
        if(selection.indexOf(item.hair_color) !== -1) return item
      });

    this.setState({
      populationResults: populationResults.length != 0 ? populationResults : this.state.population
    });
  }


  render() {
    return (
      <div className="index-wrapper row">
        <div className='col s12 m3'>
          <Filters
          hairColorList={this.state.filterHair.filterOptions}
          handleClickColorFilter={this._handleClickColorFilter}/>
        </div>
        <div className="row col m12 l9 offset-l3 gnomeCard">
        {this.state.populationResults && this.state.populationResults.map(
          (gnomeInfo, index)=>{
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
