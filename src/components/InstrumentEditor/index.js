import React from 'react';
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

export default InstrumentEditor;
