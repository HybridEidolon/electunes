import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import AudioContextProvider from './AudioContextProvider';

class NNN extends Component {
  componentDidMount() {
    const audioCtx = this.context.audioContext;
    this.osc = audioCtx.createOscillator();
    this.osc.connect(audioCtx.destination);
    this.osc.start();
  }

  componentWillUnmount() {
    this.osc.stop();
    this.osc = null;
  }

  static contextTypes = {
    audioContext: PropTypes.object
  }

  render() {
    return null;
  }
};

class ProjectAudio extends Component {
  constructor(props, context) {
    super(props, context);
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioContext = new AudioContext();
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    this.audioContext.suspend();
    this.audioContext.close();
  }

  render() {
    const ctx = this.audioContext;
    const nodes = this.props.nodes;

    return (
      <AudioContextProvider ctx={ctx}>
        {
          nodes.map((n) =>
            <NNN key={n.id} id={n.id} />
          )
        }
      </AudioContextProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nodes: state.project.nodes
  };
};

export default connect(mapStateToProps)(ProjectAudio);
