import {
  CREATE_TUTORIAL,
  RETRIEVE_TUTORIALS,
  UPDATE_TUTORIAL,
  DELETE_TUTORIAL,
  DELETE_ALL_TUTORIALS,
} from "./types";

export const createTutorial = (tutorial) => (dispatch) => {
  dispatch({
    type: CREATE_TUTORIAL,
    payload: tutorial,
  });
};

export const retrieveTutorials = () => (dispatch) => {
  dispatch({
    type: RETRIEVE_TUTORIALS,
    payload: [],
  });
};

export const updateTutorial = (id, data) => (dispatch) => {
  dispatch({
    type: UPDATE_TUTORIAL,
    payload: { id, data },
  });
};

export const deleteTutorial = (id) => (dispatch) => {
  dispatch({
    type: DELETE_TUTORIAL,
    payload: { id },
  });
};

export const deleteAllTutorials = () => (dispatch) => {
  dispatch({
    type: DELETE_ALL_TUTORIALS,
    payload: [],
  });
};
