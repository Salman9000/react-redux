import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveTutorials, deleteAllTutorials } from "../actions/tutorials";
import { Link } from "react-router-dom";

const TutorialsList = () => {
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const tutorials = useSelector((state) => state.tutorials);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveTutorials());
  }, [dispatch]);

  const refreshData = () => {
    setCurrentTutorial(null);
    setCurrentIndex(-1);
  };

  const setActiveTutorial = (tutorial, index) => {
    setCurrentTutorial(tutorial);
    setCurrentIndex(index);
  };

  const removeAllTutorials = () => {
    dispatch(deleteAllTutorials());
    refreshData();
  };

  return (
    <div className="row">
      <div className="col">
        <h1>Tutorials List</h1>

        <ul className="list-group">
          {tutorials &&
            tutorials.map((tutorial, index) => (
              <li
                className={`list-group-item ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => setActiveTutorial(tutorial, index)}
                key={index}
              >
                {tutorial.title} {tutorial.id}
              </li>
            ))}
        </ul>

        <button
          className="btn btn-danger"
          onClick={removeAllTutorials}
        >
          Remove All
        </button>
      </div>
      <div className="col">
        {currentTutorial ? (
          <div>
            <h1>Tutorial</h1>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentTutorial.title}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentTutorial.description}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentTutorial.published ? "Published" : "Pending"}
            </div>

            <Link to={"/tutorials/" + currentTutorial.id}>
              <span className="badge bg-warning">Edit</span>
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorialsList;
