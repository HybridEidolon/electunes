import React from 'react';
import './Editor.css';

import Tracker from './Tracker';

const Editor = () => (
  <div className="editor">
    <Tracker numColumns={5} />
  </div>
);

export default Editor;
