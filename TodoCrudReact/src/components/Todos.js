import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import firebaseDb from "../firebase";

const Todos = () => {
  var [todoObjects, settodoObjects] = useState({});
  var [currentId, setCurrentId] = useState("");

  useEffect(() => {
    firebaseDb.child("todos").on("value", (snapshot) => {
      if (snapshot.val() != null)
        settodoObjects({
          ...snapshot.val(),
        });
      else settodoObjects({});
    });
  }, []); // similar to componentDidMount

  const addOrEdit = (obj) => {
    if (currentId === "")
      firebaseDb.child("todos").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    else
      firebaseDb.child(`todos/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
  };

  const onDelete = (key) => {
    if (window.confirm("You want to delete this Task???")) {
      debugger;
      firebaseDb.child(`todos/${key}`).remove((err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };

  return (
    <>
      <div
        className="jumbotron jumbotron-fluid"
        style={{ color: "white", backgroundColor: "black" }}
      >
        <div className="container" style={{ border: "1px solid" }}>
          <h1 className="display-4 text-center">TODO LIST</h1>
        </div>
      </div>
      <div className="row" style={{ color: "red", backgroundColor: "black" }}>
        <div className="col-md-5">
          <TodoForm {...{ addOrEdit, currentId, todoObjects }} />
        </div>
        <div className="col-md-7">
          <table
            className="table table-borderless table-stripped border-white border-all"
            style={{ border: "1px solid" }}
          >
            <thead
              className="thead-light"
              style={{
                color: "white",
                backgroundColor: "black",
              }}
            >
              <tr>
                <th>TASK</th>
                <th>DESCRIPTION</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(todoObjects).map((id) => {
                return (
                  <tr key={id}>
                    <td
                      style={{
                        color: "white",
                        backgroundColor: "black",
                      }}
                    >
                      {todoObjects[id].task}
                    </td>
                    <td
                      style={{
                        color: "white",
                        backgroundColor: "black",
                      }}
                    >
                      {todoObjects[id].description}
                    </td>

                    <td>
                      <a
                        className="btn text-primary"
                        onClick={() => {
                          setCurrentId(id);
                        }}
                      >
                        <i className="fas fa-pencil-alt"></i>
                      </a>
                      <a
                        className="btn text-danger"
                        onClick={() => {
                          onDelete(id);
                        }}
                      >
                        <i className="far fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Todos;
