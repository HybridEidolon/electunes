import React from 'react';

import TrackerColumn from './TrackerColumn';

const Tracker = ({numColumns}) => (
  <div style={{display: 'flex', flexDirection: 'row', flex: '1'}}>
    {
      [...Array(numColumns)].map((x, i) => (
          <TrackerColumn key={i} col={i} />
        )
      )
    }
  </div>
);

Tracker.propTypes = {
  numColumns: React.PropTypes.number,
};

Tracker.defaultProps = {
  numColumns: 4,
};

export default Tracker;
