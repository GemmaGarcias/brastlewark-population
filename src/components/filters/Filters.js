import React, { Component } from 'react';
import HairFilter from './handleFilters/HairFilter';
import './Filters.css';

class Filters extends Component {
  constructor(){
    super();
    this.state = {
      isMobileSize: false
    };
  }

  componentDidMount(){
    if(window.innerWidth < "480px"){
      this.setState({
        isMobileSize: true
      })
    }
  }

  render() {
    return (
      <div>
        <ul id="slide-out" className={this.state.isMobileSize ? "sidenav" : "sidenav sidenav-fixed menu-filters"}>
          <li><a href="#!"><i className="material-icons">cloud</i>Filters</a></li>
          <li><div className="divider"></div></li>
          <li>
            <HairFilter
              hairColorList={this.props.hairColorList}
              handleClickColorFilter={this.props.handleClickColorFilter}/>
          </li>
        </ul>
        {this.state.isMobileSize ? <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i>Filters</a> : null}
      </div>
    )
  }
}

export default Filters;
