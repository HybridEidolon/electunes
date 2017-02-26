import React from 'react';
import {connect} from 'react-redux';
import './Editor.css';
import {Tabs, TabList, Tab, TabPanel} from '@blueprintjs/core';
import {openTrackerEditor, openInstrumentEditor} from '../actions';

import Tracker from './Tracker';
import InstrumentEditor from './InstrumentEditor';

const Editor = ({selectedTab, onChange}) => (
  <div className="editor">
    <Tabs selectedTabIndex={selectedTab} onChange={onChange} className="tune-editor-tabs">
      <TabList>
        <Tab>Tracker</Tab>
        <Tab>Instrument</Tab>
      </TabList>

      <TabPanel className="tune-editor-tabpanel">
        <Tracker columns={4} />
      </TabPanel>
      <TabPanel className="tune-editor-tabpanel">
        <InstrumentEditor />
      </TabPanel>
    </Tabs>
  </div>
);

const mapStateToProps = (state) => {
  let selectedTab = 0;
  switch (state.currentEditor) {
    case 'tracker': selectedTab = 0; break;
    case 'instrument': selectedTab = 1; break;
    default: break;
  }

  return {
    selectedTab
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (tabIndex, prevTab) => {
      switch (tabIndex) {
        case 0: dispatch(openTrackerEditor()); break;
        case 1: dispatch(openInstrumentEditor()); break;
        default: break;
      }
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
