import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

let ctx = new AudioContext();
let spn = ctx.createScriptProcessor(256, 0, 1);

spn.onaudioprocess = function(e) {
    let outb = e.outputBuffer;
    for (var c = 0; c < outb.numberOfChannels; c++) {
        let out = outb.getChannelData(c);
        for (var s = 0; s < outb.length; s++) {
            out[s] = ((Math.random() * 2) - 1) * 0.05;
        }
    }
};

//spn.connect(ctx.destination);
