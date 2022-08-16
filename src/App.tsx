import { useCallback, useReducer, useRef } from "react";
import "./App.css";

// make data interface
interface Todo {
  id: number;
  text: string;
}

// make action here
type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };

function App() {
  // make reducer here
  function reducer(state: Todo[], action: ActionType) {
    switch (action.type) {
      case "ADD":
        return [...state, { id: state.length, text: action.text }];

      case "REMOVE":
        return state.filter(({ id }) => id !== action.id);
    }
  }

  const [todos, dispatch] = useReducer(reducer, []);

  const newTodoRef = useRef<HTMLInputElement>(null);

  // add todo
  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch({
        type: "ADD",
        text: newTodoRef.current.value,
      });
      newTodoRef.current.value = "";
    }
  }, []);

  // remove todo
  const removeTodo = (id: number) => {
    dispatch({ type: "REMOVE", id: id });
  };

  return (
    <div className="App">
      <input type="text" ref={newTodoRef} />
      <button onClick={onAddTodo}>Add Todo</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default App;
