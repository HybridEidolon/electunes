import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { Menu, MenuItem, Popover, Position } from '@blueprintjs/core';
import { createOscillatorNode } from '../../actions';

const menu = ({clickMakeOsc}) => (
  <Menu>
    <MenuItem iconName="graph" text="Oscillator" onClick={clickMakeOsc} />
  </Menu>
);

menu.propTypes = {
  clickMakeOsc: PropTypes.func,
};

const AddNodeForm = ({clickMakeOsc}) => (
  <div>
    <Popover content={menu({clickMakeOsc})} position={Position.RIGHT_BOTTOM}>
      <button className="pt-button pt-icon pt-icon-add">Add Node</button>
    </Popover>
  </div>
);

AddNodeForm.propTypes = {
  clickMakeOsc: PropTypes.func,
};

const mapStateToProps = () => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickMakeOsc: () => dispatch(createOscillatorNode()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNodeForm);
