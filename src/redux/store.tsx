import { createStore } from "redux";
import counter_reducer from "./reducers/counter_reducer";
const store = createStore(
  counter_reducer
);
export { store };