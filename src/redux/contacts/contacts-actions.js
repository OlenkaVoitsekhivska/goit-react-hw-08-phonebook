import { createAction } from '@reduxjs/toolkit';

const updateFilter = createAction('filter/update');

const actions = {
  updateFilter,
};
export default actions;
