import React, {Component} from 'react';
import './HairFilter.css';

class HairFilter extends Component {
  constructor(){
    super();
  }

	_handleOnClick=(e)=>{
		e.preventDefault();
		let selected= e.target.dataset.color;
		let filterType= e.target.dataset.filter;

		this.props.handleClickColorFilter(selected, filterType);
	}

  render() {
		return(
			<div className='filter-wrapper-menu'>
			<h6>Hair Color</h6>
			{this.props.hairColorList.map((color, index) =>{
				return(
					<div className="color-list"
					onClick={this._handleOnClick} data-filter='filterHair' data-color={color.name} key={index}>
						<span className='checkmark' data-color={color.name}>{color.name}</span>
						{color.selected ? <i className="material-icons filter-icons right">check</i> : null}
					</div>
				)
			})}
			</div>
		)
	}
}

export default HairFilter;
