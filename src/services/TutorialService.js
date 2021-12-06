import http from "../http-common";

let dataId = 4;
let defaultData = [
  { id: 1, title: "React Hooks Basic", description: "Tut# 1" },
  { id: 2, title: "Redux Basic", description: "Tut# 2" },
  { id: 3, title: "Redux Hooks Basic", description: "Tut# 3" },
  { id: 4, title: "React CRUD", description: "Tut# 4" },
];
const getAll = async () => {
    try {
        return {data: defaultData};

    } catch(e) {
        console.log(e)
    }
};

const get = async (id) => {
    try {
        return {data: defaultData.filter((item) => id == item.id)[0]}
    } catch(e) {
        console.log(e)
    }

//   return http.get(`/tutorials/${id}`);
};

const create = (data) => {
    dataId += 1;
    let newData = [...defaultData, { id: dataId, title: data.title, description: data.description }];
    return {data: newData}
//   return http.post("/tutorials", data);
};

const update = (id, data) => {
    const { title, description } = data;
    const dataCopy = defaultData;
    const element = dataCopy.filter((value) => id == value.id)[0];
    element.title = title;
    element.description = description;
    // defaultData = dataCopy;
    return {data:dataCopy}
//   return http.put(`/tutorials/${id}`, data);
};

const remove = (id) => {
    return {data: defaultData.filter((value) => id != value.id)}
//   return http.delete(`/tutorials/${id}`);
};

const removeAll = () => {
    return {data: []}
//   return http.delete(`/tutorials`);
};

const findByTitle = (title) => {
    let updatedData = []
    defaultData.map(data => {
        const startsWith = data?.title?.toLowerCase().startsWith(title.toLowerCase())

        const includes = data?.title?.toLowerCase().includes(title.toLowerCase())
        
        if (startsWith) {
            updatedData = [...updatedData, data]
          } else if (!startsWith && includes) {           
            updatedData = [...updatedData, data]
          } else {
            updatedData = [...updatedData]
          }
    })
    // console.log(updatedData)
    return {data: updatedData}
    
//   return http.get(`/tutorials?title=${title}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TutorialService;
