/**
 * 
 * @param {Observable} action$
 * @returns {Observable}
 */
export const audioSession = (action$, store) => action$
  .ofType('CREATE_OSCILLATOR_NODE')
  .do(() => console.log(store.getState()))
  .filter(() => false)

export default audioSession
