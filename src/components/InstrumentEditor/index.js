import React from 'react';
import {connect} from 'react-redux';
import '../../flex.css';
import Node from './Node';
import AddNodeForm from './AddNodeForm';

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
  nodes: React.PropTypes.array
};

InstrumentEditor.defaultProps = {
  nodes: []
};

const mapStateToProps = (state) => {
  return {
    nodes: state.editor.instrument.nodes
  }
};

export default connect(mapStateToProps)(InstrumentEditor);
