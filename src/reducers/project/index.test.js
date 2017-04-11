import project from './index';
import {
  createOscillatorNode,
  deleteNode,
} from '../../actions';

describe('project reducer', () => {
  it('should add a node on createOscillatorNode', () => {
    expect(project({nodes: []}, createOscillatorNode()).nodes).toHaveLength(1);
  });

  it('should delete a node on deleteNode', () => {
    expect(project({nodes: [{id: 'abc', type: 'oscillator'}]}, deleteNode('abc')).nodes).toHaveLength(0);
  });

  it('should not delete any nodes on deleteNode of nonexistant node', () => {
    expect(project({nodes: [{id: 'abc'}]}, deleteNode('a')).nodes).toHaveLength(1);
  });
});
