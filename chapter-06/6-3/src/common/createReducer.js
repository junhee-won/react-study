import produce from "immer";

export default function createReducer(initialState, handleMap) {
  return function (state = initialState, action) {
    return produce(state, (draft) => {
      const handler = handleMap[action.type];
      if (handler) {
        handler(draft, action);
      }
    });
  };
}
