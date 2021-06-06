import { DISPLAY_ON_PREVIEW } from "./types/types";

const initialState = {
  editText: "",
};
const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ON_PREVIEW:
      return { editText: action.payload};
    default:
      return state;
  }
};

export default editorReducer;
