import React from 'react';
import { roundTo } from '../appUtils/appUtils';
import './GnomeCard.css';

const GnomeCard = (props) => {
  const {thumbnail, name, age, hair_color, friends, height, weight, id, professions } = props.data;

	return(
    <div className="col s12 m6" key={id}>

      <div className="card">
        <div className="card-image waves-effect waves-block waves-light img-wrapper">
          <img className="activator" src={thumbnail} alt="main-img"/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{name}<i className="material-icons right">more_vert</i></span>
          <p>{`${age} years | `}
            <strong>{props.cardDetail_infoTitle}</strong>
            <i className="material-icons left">face</i>{` : ${hair_color}`}</p>
        </div>

        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{props.cardDetail_title}
            <i className="material-icons right">close</i>
          </span>
          <div className='detail-info'>
          <p className='text-info'>
            <strong>{props.gnomeInfoDetail_title1}</strong>{`: ${roundTo(weight)} kg | `}
            <strong>{props.gnomeInfoDetail_title2}</strong>{ `: ${roundTo(height)} cm`}
            <i className="material-icons left">accessibility</i>
          </p>
          <p className='text-info friends-title'>
            <strong>
              {`${friends.length} ${props.gnomeInfoDetail_title3}`}
              {friends.length ? ':' : null}
            </strong>
            <i className="material-icons left">people_outline</i>
          </p>
          <ul className='text-info friendsList'>
            {friends && friends.map((friend, index) =>{
              return(
              <li key={index}>{friend}</li>
              )
            })}
          </ul>
          <p className='text-info friends-title'>
            <strong>
              {`${professions.length} ${props.gnomeInfoDetail_title4}`}
              {professions.length ? ':' : null}
            </strong>
            <i className="material-icons left">card_travel</i>
          </p>
          <ul className='text-info friendsList'>
            {professions && professions.map((profession, index) =>{
              return(
              <li key={index}>{profession}</li>
              )
            })}
          </ul>

          </div>
        </div>
      </div>
    </div>
	)
}
// Set default props
GnomeCard.defaultProps = {
  cardDetail_title: "Details",
  cardDetail_infoTitle: "Hair color",
  gnomeInfoDetail_title1: "Weight",
  gnomeInfoDetail_title2: "Height",
  gnomeInfoDetail_title3: "Friends",
  gnomeInfoDetail_title4: "Professions"

};

export default GnomeCard;
