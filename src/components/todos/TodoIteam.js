import { deleteTodo, toggleTodo, editTodo } from "../../store/slices/TodoSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const TodoIteam = ({ todo }) => {
  const [editmode, setEditMode] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const dispatch = useDispatch();

  const deleteHandler = () => dispatch(deleteTodo(todo.id));
  const toggleHandler = () => dispatch(toggleTodo(todo.id));
  const editHandler = () => {
    dispatch(editTodo({ id: todo.id, text: newText }));
    setEditMode(false);
  };

  return (
    <div className="flex mb-4 items-center">
      {editmode ? (
        <>
          <input
            value={newText}
            onChange={(e) =>
              e.target.value.length > 0
                ? setNewText(e.target.value)
                : setNewText("")
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-800"
            placeholder="Add Todo"
          />
          <button
            className="p-2 border-2 rounded text-blue-500 border-blue-500  hover:text-white hover:bg-blue-500"
            onClick={editHandler}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <p
            className={`mr-auto ${
              todo.done ? "line-through text-green-600" : "text-gray-700"
            }`}
          >
            {todo.text}
          </p>
          {todo.done ? (
            <button
              onClick={toggleHandler}
              className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-400 border-gray-400 hover:bg-gray-400"
            >
              Not Done
            </button>
          ) : (
            <button
              onClick={toggleHandler}
              className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600"
            >
              Done
            </button>
          )}

          <button
            onClick={() => setEditMode(true)}
            className="p-1 px-2 ml-2 border-2 rounded text-yellow-600 border-yellow-600 hover:text-white hover:bg-yellow-600"
          >
            edit
          </button>
        </>
      )}

      <button
        onClick={deleteHandler}
        className="p-1 px-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
};

export default TodoIteam;
