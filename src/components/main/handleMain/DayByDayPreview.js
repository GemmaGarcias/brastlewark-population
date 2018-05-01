import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TwoColImgText from '../../utils-layout/two-col-img-text'

class DayByDayPreview extends Component {
  constructor(props){
    super(props)
    this.state = {
    messages:[]
  }
 }

   render() {
  	return(
  		<div className="container">
        <div className="accordion" id="accordion">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  CALENDARI DAY BY DAY
                </button>
              </h5>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
              <div className="card-body">
              {this.props.calendarDetail.map((day, indexDay)=>
                <TwoColImgText
                  key = {indexDay}
                  dayNum= {day.dayNum}
                  description = {day.description}
                  imgPreview= {day.imgPreview}
                  title= {day.title}
                  weekDay= {day.weekDay}
                />
              )}
            </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Collapsible Group Item #2
                </button>
              </h5>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div className="card-body">
              jjj
            </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Collapsible Group Item #3
                </button>
              </h5>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div className="card-body">
              kkk
            </div>
            </div>
          </div>
          </div>
  		</div>
      )
    }
  }

// DayByDayPreview.defaultProps = {
//   calendar: []
// }

export default DayByDayPreview;
