import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore, combineReducers } from "redux";
import timelineReducer, {
  addTimeline,
  removeTimeline,
  editTimeline,
  increaseNextPage,
} from "./timeline/state";
import friendReducer, {
  addFriend,
  removeFriend,
  editFriend,
} from "./friend/state";

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});
const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTimeline({ id: 1, desc: "코딩코딩" }));
store.dispatch(increaseNextPage());
store.dispatch(addFriend({ id: 1, name: "Mike" }));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
