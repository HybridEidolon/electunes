import React from 'react';

const Node = ({node,}) => (
  <div>
    <p>{node.id}</p>
    <p>Type: {node.type}</p>
  </div>
);

export default Node;
