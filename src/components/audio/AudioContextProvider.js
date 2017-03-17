import React, {Component, PropTypes} from 'react';

export default class AudioContextProvider extends Component {
  constructor(props, context) {
    super(props, context);

    this.ctx = props.ctx;
  }

  static propTypes = {
    ctx: PropTypes.object.isRequired
  }

  static childContextTypes = {
    audioContext: PropTypes.object.isRequired
  }

  getChildContext() {
    return {
      audioContext: this.ctx
    };
  }

  componentWillReceiveProps(nextProps) {
    const {ctx} = this;
    const {ctx: nextCtx} = nextProps;
    if (ctx !== nextCtx) {
      console.warn('AudioContextProvider: You should not change the AudioContext! Recreate the entire component tree instead.');
    }
  }

  render() {
    return <span style={{display: 'none'}}>{this.props.children}</span>;
  }
}
