import React, { useState, useEffect } from "react";

const TodoForm = (props) => {
  const initialFieldValues = {
    task: "",
    description: "",
  };

  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currentId == "")
      setValues({
        ...initialFieldValues,
      });
    else
      setValues({
        ...props.todoObjects[props.currentId],
      });
  }, [props.currentId, props.todoObjects]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleFormSubmit}
      style={{
        color: "white",
        backgroundColor: "black",
      }}
    >
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-thumbtack"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="Enter Task !!!"
          name="task"
          value={values.task}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <textarea
          className="form-control"
          placeholder=" Enter Description !!!"
          name="description"
          value={values.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="submit"
          value={props.currentId == "" ? "Save" : "Update"}
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default TodoForm;
