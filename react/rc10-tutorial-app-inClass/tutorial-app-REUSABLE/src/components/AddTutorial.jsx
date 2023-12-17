import { useState, useEffect } from "react";
import axios from "axios";

const AddTutorial = ({ getTutorials, editData, setEditData }) => {
  const { title: oldTitle, description: oldDescription, id } = editData;

  const [title, setTitle] = useState(oldTitle);
  const [description, setDescription] = useState(oldDescription);
  //? componentDidUpdate
  useEffect(() => {
    setTitle(oldTitle);
    setDescription(oldDescription);
  }, [oldTitle, oldDescription,editData]);
  const handleSubmit = (e) => {
    e.preventDefault();
       const newTutorial = { title, description };
       if(id){
        editTutorial(newTutorial);
        setEditData("")
       }else{
        postTutorial(newTutorial);  
    setTitle("");
    setDescription("");
       }
    
  
  };

  const postTutorial = async (newTutorial) => {
    try {
      // const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/"
      const res = await axios.post(process.env.REACT_APP_URL, newTutorial);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  const editTutorial = async (tutorial) => {
    try {
      await axios.put(`${process.env.REACT_APP_URL}${id}/`, tutorial);
      getTutorials();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger mb-4">
        { id?"Edit": "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddTutorial;
