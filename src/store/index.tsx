import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/root.reducer";
import thunk from "redux-thunk";
export default function configureStore(initailState = {}) {
  const store = createStore(
    rootReducer,
    initailState,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
}
