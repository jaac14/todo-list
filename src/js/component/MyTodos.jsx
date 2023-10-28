import React, { useState } from "react";
//declarando el estado inicial de mi tarea
const initialState = {
  label: "",
  done: false,
};

const MyTodos = () => {
  //guardando lo que se copia en mi input value
  const [task, setTask] = useState("");

  //guardando mi tarea ya lista en el estado que se mostrara
  const [myListTasks, setMyListTasks] = useState([]);

  //manejando el error
  const [error, setError] = useState(false);

  //function para fuardar my tarea ya terminada

  function saveMyTaks(event) {
    if (event.key === "Enter") {
      if (event.target.value.trim() !== "") {
        setMyListTasks([...myListTasks, { label: task, done: false }]);
        setTask("");
        setError(false);
      } else {
        setError(true);
      }
    }
  }

  //add my input value from my input to my state
  function addInputValue(event) {
    setTask(event.target.value);
  }

  //eliminar tareas
  const deleteTask = (id) => {
    let newArr = myListTasks.filter((_, index) => index != id);

    setMyListTasks(newArr);
  };

  //funcion para modificar el contador de tareas

  function taskCounter(number) {
    number = myListTasks.length
    if (number === 0) {
      return ('No hay tareas agregue una!')
    }
    else return number + ' Task'
  }

  return (
    <div className="Container myTodos">
      {error ? (
        <div className="alert alert-danger">
          Debes ingresar un tipo de dato valido
        </div>
      ) : (
        false
      )}
      <div className="li-input input-style">
        <input
          name="label"
          type="text"
          placeholder="Add your tasks here "
          onChange={addInputValue}
          onKeyDown={saveMyTaks}
          value={task}
        />
      </div>
      <ol>

        {myListTasks.map((item, index) => {
          return (
            <li key={index} className="list-task">
              {item.label}
              <i
                className="fa-solid fa-trash-can fa-beat-fade"
                onClick={() => deleteTask(index)}
              ></i>
            </li>
          );
        })}
      </ol>
      <div className="number-task">{taskCounter(myListTasks.length)}</div>
    </div>
  );
};

export default MyTodos;
