import { createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { reducers } from "./reducers/index";

const composedEnhancers = composeWithDevTools();

const store = createStore(reducers, undefined, composedEnhancers);

export default store;
