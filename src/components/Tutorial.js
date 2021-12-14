import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTutorial, deleteTutorial } from "../actions/tutorials";
import TutorialService from "../services/TutorialService";

const Tutorial = (props) => {
  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    published: false,
  };
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getTutorial = async (id) => {
    try {
      const res = await TutorialService.get(id);
      setCurrentTutorial(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTutorial(props.match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };

  const updateStatus = (status) => {
    const data = {
      id: currentTutorial.id,
      title: currentTutorial.title,
      description: currentTutorial.description,
      published: status,
    };

    dispatch(updateTutorial(currentTutorial.id, data));
    setCurrentTutorial({ ...currentTutorial, published: status });
    setMessage("The status was updated successfully!");
  };

  const updateContent = () => {
    dispatch(updateTutorial(currentTutorial.id, currentTutorial));
    setMessage("The tutorial was updated successfully!");
  };

  const removeTutorial = () => {
    dispatch(deleteTutorial(currentTutorial.id));
    props.history.push("/tutorials");
  };

  return (
    <div>
      {currentTutorial ? (
        <div className="edit-form">
          <h1>Tutorial</h1>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentTutorial.title}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentTutorial.description}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label>
                <strong>Status:</strong>
              </label>
              {currentTutorial.published ? "Published" : "Pending"}
            </div>
          </form>

          <div className="mt-1">
            {currentTutorial.published ? (
              <button
                className="btn badge bg-primary mr-2"
                onClick={() => updateStatus(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="btn badge bg-primary mr-2"
                onClick={() => updateStatus(true)}
              >
                Publish
              </button>
            )}

            <button
              className="btn badge bg-danger mr-2"
              onClick={removeTutorial}
            >
              Delete
            </button>

            <button
              type="submit"
              className="btn badge bg-success"
              onClick={updateContent}
            >
              Update
            </button>
            <p>{message}</p>
          </div>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  );
};

export default Tutorial;
