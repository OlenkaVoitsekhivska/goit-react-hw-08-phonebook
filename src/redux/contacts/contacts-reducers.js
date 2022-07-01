import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import actions from './contacts-actions';

const filter = createReducer('', {
  [actions.updateFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  filter,
});
