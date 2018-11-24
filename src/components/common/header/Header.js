import React from 'react';
import './Header.css';

const Header = (props) => {

	return(
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo"><i className="material-icons">home</i>{props.title}</a>
      </div>
    </nav>
	)
}

// Set default props
Header.defaultProps = {
  title: "BRASTLEWARK POPULATION"
};
export default Header;
