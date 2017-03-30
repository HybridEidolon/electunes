import React from 'react';
import './Panel.css';

const Panel = ({children, style,}) => (
  <div className="tune-panel" style={style}>
    {children}
  </div>
);

Panel.propTypes = {
  style: React.PropTypes.object,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};

export default Panel;
