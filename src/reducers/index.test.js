import root from './index';
import {
  openInstrumentEditor,
  openTrackerEditor,
} from '../actions';

describe('root reducer', () => {
  it('should change currentEditor on open instrument editor', () => {
    expect(root({currentEditor: 'lol'}, openInstrumentEditor()).currentEditor).toBe('instrument');
  });

  it('should change currentEditor on open tracker editor', () => {
    expect(root({currentEditor: 'lol'}, openTrackerEditor()).currentEditor).toBe('tracker');
  });
});
