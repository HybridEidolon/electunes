import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import './Editor.css';
import {Tabs2, Tab2} from '@blueprintjs/core';
import {openTrackerEditor, openInstrumentEditor} from '../actions';

import Tracker from './Tracker';
import InstrumentEditor from './InstrumentEditor';

const Editor = ({selectedTab, onChange}) => (
  <div className="editor">
    <Tabs2 selectedTabId={selectedTab} onChange={onChange} className="tune-editor-tabs">
      <Tab2 id="tracker" title="Tracker" panel={<Tracker columns={4}/>} />
      <Tab2 id="instrument" title="Instrument" panel={<InstrumentEditor />} />
    </Tabs2>
  </div>
);

Editor.propTypes = {
  selectedTab: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = (state) => {
  let selectedTab = 'tracker';
  switch (state.currentEditor) {
    case 'tracker': selectedTab = 'tracker'; break;
    case 'instrument': selectedTab = 'instrument'; break;
    default: break;
  }

  return {
    selectedTab,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (tabIndex) => {
      switch (tabIndex) {
        case 'tracker': dispatch(openTrackerEditor()); break;
        case 'instrument': dispatch(openInstrumentEditor()); break;
        default: break;
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
