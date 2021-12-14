import http from "../http-common";

// let defaultData = [];
const getAll = async (id) => {
  try {
    return http.get(`/api`);
  } catch (e) {
    console.log(e);
  }
};

const get = async (id) => {
  try {
    return http.get(`/api/${id}`);
  } catch (e) {
    console.log(e);
  }
};

const create = async (data) => {
  try {
    return http.post("/api/create", data);
  } catch (e) {
    console.log(e);
  }
};

const update = async (id, data) => {
  try {
    return http.put(`/api/update/${id}`, data);
  } catch (e) {
    console.log(e);
  }
};

const remove = async (id) => {
  try {
    return http.delete(`/api/remove/${id}`);
  } catch (e) {
    console.log(e);
  }
};

const removeAll = async () => {
  try {
    return http.delete(`/api/removeAll`);
  } catch (e) {
    console.log(e);
  }
};

// const findByTitle = async (title) => {
//   let updatedData = [];
//   defaultData.map((data) => {
//     const startsWith = data?.title
//       ?.toLowerCase()
//       .startsWith(title.toLowerCase());

//     const includes = data?.title?.toLowerCase().includes(title.toLowerCase());

//     if (startsWith) {
//       updatedData = [...updatedData, data];
//     } else if (!startsWith && includes) {
//       updatedData = [...updatedData, data];
//     } else {
//       updatedData = [...updatedData];
//     }
//   });
//   // console.log(updatedData)
//   return { data: updatedData };

//   //   return http.get(`/tutorials?title=${title}`);
// };

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
//   findByTitle,
};

export default TutorialService;
