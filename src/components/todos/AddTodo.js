import { useState } from "react";
import { addTodo } from "../../store/slices/ToodoSlice";
import { useDispatch } from "react-redux";
import { data } from "autoprefixer";

const AddTodo = () => {
  const [inputTodo, setInputTodo] = useState("");
  const dispatch = useDispatch();

  const addButton = () => {
    if (inputTodo.length > 0) {
      dispatch(
        addTodo({
          id: new Date().getTime(),
          text: inputTodo,
          done: true,
        })
      );

      setInputTodo("");
    }
  };

  return (
    <div className="flex mt-4">
      <input
        onChange={(e) =>
          e.target.value.length > 0
            ? setInputTodo(e.target.value)
            : setInputTodo("")
        }
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-800"
        placeholder="Add Todo"
      />
      <button
        className="p-2 border-2 rounded text-teal-500 border-teal-500  hover:text-white hover:bg-teal-500"
        onClick={addButton}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
