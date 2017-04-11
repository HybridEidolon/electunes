import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Button} from '@blueprintjs/core';

import {deleteNode} from '../../actions';

const Node = ({node, deleteNode}) => (
  <div>
    <p>{node.id}</p>
    <p>Type: {node.type}</p>
    <Button onClick={deleteNode}>Delete</Button>
  </div>
);

Node.propTypes = {
  node: PropTypes.object.isRequired,
  deleteNode: PropTypes.func.isRequired,
};

const mapDispatch = (dispatch, ownProps) => ({
  deleteNode: () => dispatch(deleteNode(ownProps.node.id)),
});

export default connect(() => ({}), mapDispatch)(Node);
