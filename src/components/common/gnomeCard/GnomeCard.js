import React from 'react';
import './GnomeCard.css';

const GnomeCard = (props) => {
  console.log(props);
  const {thumbnail, name, age, hair_color} = props.data;

	return(
    <div className="col s6 m6 l4">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light img-wrapper">
          <img className="activator" src={thumbnail} alt="main-img"/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
          <p><a href="#">This is a link</a></p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
    </div>
	)
}

export default GnomeCard;
