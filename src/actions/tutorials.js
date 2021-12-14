import {
  CREATE_TUTORIAL,
  RETRIEVE_TUTORIALS,
  UPDATE_TUTORIAL,
  DELETE_TUTORIAL,
  DELETE_ALL_TUTORIALS,
} from "./types";

import TutorialService from "../services/TutorialService";

export const createTutorial = (tutorial) => async (dispatch) => {
  const { title, description } = tutorial
  const res = await TutorialService.create({ title, description });
  console.log(res.data)
  dispatch({
    type: CREATE_TUTORIAL,
    // payload: tutorial,
    payload: res.data,
  });
};

export const retrieveTutorials = () => async (dispatch) => {
  const res = await TutorialService.getAll();
  dispatch({
    type: RETRIEVE_TUTORIALS,
    // payload: [],
    payload: res.data,
  });
};

export const updateTutorial = (id, data) => async (dispatch) => {
  const res = await TutorialService.update(id, data);
  console.log(res.data)
  dispatch({
    type: UPDATE_TUTORIAL,
    // payload: { id, data },
    payload: res.data
  });
};

export const deleteTutorial = (id) => async (dispatch) => {
   const res = await TutorialService.remove(id);
  dispatch({
    type: DELETE_TUTORIAL,
    payload: res.data,
  });
};

export const deleteAllTutorials = () => async (dispatch) => {
  const res = await TutorialService.removeAll();
  dispatch({
    type: DELETE_ALL_TUTORIALS,
    payload: res.data,
  });
};
