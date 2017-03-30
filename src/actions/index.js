import uuid from 'uuid';
import {createAction,} from 'redux-actions';

export const openInstrumentEditor = createAction('OPEN_INSTRUMENT_EDITOR');
export const openTrackerEditor = createAction('OPEN_TRACKER_EDITOR');

export const createOscillatorNode = createAction('CREATE_OSCILLATOR_NODE', () => ({ uuid: uuid(), }));
