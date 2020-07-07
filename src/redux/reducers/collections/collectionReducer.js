import * as ActionTypes from './collectionActionTypes';
let defaultColectionStore = {
  name: '',
  tags: [],
  public: false,
  message: '',
};

export const collectionReducer = (state = defaultColectionStore, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_COLLECTION_FIELD:
      return {
        ...state,
        [Object.keys(action.payload)[0]]: Object.value(action.payload)[0],
      };
    case ActionTypes.CREATE_COLLECTION:
      return {
        ...defaultColectionStore,
      };
    default:
      return state;
  }
};
