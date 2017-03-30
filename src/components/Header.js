import React, { PropTypes, } from 'react';
import './Header.css';

const Header = ({appName,}) => (
  <header className="pt-navbar header">
    <div className="pt-navbar-group pt-align-left">
      <div className="pt-navbar-heading">{appName} <small>by eidolon</small></div>
    </div>
    <div className="pt-navbar-group pt-align-right">
      <button className="pt-button pt-minimal pt-icon-cog" />
    </div>
  </header>
);

Header.propTypes = {
  appName: PropTypes.string,
};

Header.defaultProps = {
  appName: 'Electunes',
};

export default Header;
