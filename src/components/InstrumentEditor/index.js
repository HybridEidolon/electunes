import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import '../../flex.css';
import Node from './Node';
import AddNodeForm from './AddNodeForm';
import _ from 'lodash';

const InstrumentEditor = ({nodes}) => (
  <div>
    <AddNodeForm />
    {
      nodes.map((n) => (
        <Node key={n.id} node={n} />
      ))
    }
  </div>
);

InstrumentEditor.propTypes = {
  nodes: PropTypes.array,
};

InstrumentEditor.defaultProps = {
  nodes: [],
};

const mapStateToProps = (state) => {
  return {
    nodes: _.get(state, 'project.nodes'),
  };
};

export default connect(mapStateToProps)(InstrumentEditor);
