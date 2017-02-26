import React from 'react';
import './Panel.css';

const Panel = ({children, style}) => (
  <div className="tune-panel" style={style}>
    {children}
  </div>
);

Panel.propTypes = {
  style: React.PropTypes.object
};

export default Panel;
