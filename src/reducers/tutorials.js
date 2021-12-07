import {
  CREATE_TUTORIAL,
  RETRIEVE_TUTORIALS,
  UPDATE_TUTORIAL,
  DELETE_TUTORIAL,
  DELETE_ALL_TUTORIALS,
} from "../actions/types";

const initialState = [
  { id: 1, title: "React Hooks Basic", description: "Tut# 1" },
  { id: 2, title: "Redux Basic", description: "Tut# 2" },
  { id: 3, title: "Redux Hooks Basic", description: "Tut# 3" },
  { id: 4, title: "React CRUD", description: "Tut# 4" },
];

let dataId = 4;

function tutorialReducer(tutorials = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TUTORIAL:
      dataId += 1;
      let newData = {
        id: dataId,
        title: payload.title,
        description: payload.description,
      };
      let ct = [...tutorials, newData];
      return ct;

    case RETRIEVE_TUTORIALS:
      return tutorials;

    case UPDATE_TUTORIAL:
      const abc = tutorials.map((tutorial) => {
        if (tutorial.id === payload.id) {
          return {
            ...tutorial,
            ...payload.data,
          };
        } else {
          return tutorial;
        }
      });
      return abc;

    case DELETE_TUTORIAL:
      return tutorials.filter((tutorial) => tutorial.id !== payload.id);

    case DELETE_ALL_TUTORIALS:
      return [];

    default:
      return tutorials;
  }
}

export default tutorialReducer;
