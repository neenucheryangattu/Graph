import { createStore, createHook, defaults } from "react-sweet-state";
import initialState from "./initialState";
import actions from "./actions";

defaults.devtools = true;
const Cities = createStore({
  name: "city",
  initialState,
  actions,
});

export const GetCitieslist = createHook(Cities, {
  selector: (state) => state,
});
