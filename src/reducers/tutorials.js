import {
  CREATE_TUTORIAL,
  RETRIEVE_TUTORIALS,
  UPDATE_TUTORIAL,
  DELETE_TUTORIAL,
  DELETE_ALL_TUTORIALS,
} from "../actions/types";

const initialState = [];

function tutorialReducer(tutorials = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TUTORIAL:
      let ct = [...tutorials, payload];
      return ct;

    case RETRIEVE_TUTORIALS:
      return payload;

    case UPDATE_TUTORIAL:
      return payload

    case DELETE_TUTORIAL:
      return payload

    case DELETE_ALL_TUTORIALS:
      return payload;

    default:
      return tutorials;
  }
}

export default tutorialReducer;
