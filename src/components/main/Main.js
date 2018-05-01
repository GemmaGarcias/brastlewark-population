import React, {Component} from 'react';
import './Main.css';
import {Link} from 'react-router-dom';
import DayByDayPreview from './handleMain/DayByDayPreview.js';
import FileUpload from '../uploadFiles/FileUpload';
class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
    messages:[]
  }
 }

   render() {
  	return(
  		<div className="container">
          <DayByDayPreview
            calendarDetail= {this.props.calendar}
          />
          <FileUpload />
  		</div>
    )
  }
}

Main.defaultProps = {
  calendar : [
    {
      dayNum: '1 Agost',
      weekDay: 'Dimecres',
      imgPreview: 'http://res.cloudinary.com/duholcmsa/image/upload/v1524421392/trip/plane.png',
      title: 'Vamonoh',
      description: 'Vol cap a Los Ángeles amb previsió arribada 19:55h'
    },
  ]
}

export default Main;
