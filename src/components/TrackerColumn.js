import React, {PropTypes} from 'react';

const TrackerColumn = ({col}) => (
  <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
    <div>
    Channel {col}
    </div>
    <div style={{fontFamily: 'monospace', fontWeight: 'bold'}}>
      NN II EEEE XX
    </div>
    {
      [...Array(20)].map((x, i) => (
        <div style={{fontFamily: 'monospace'}} key={i}>
          -- -- ---- --
        </div>
      ))
    }
  </div>
);

TrackerColumn.propTypes = {
  col: PropTypes.number.isRequired,
};

export default TrackerColumn;
