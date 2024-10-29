import { useState } from "react";

function App() {
	const [todos, setTodos] = useState([]);
	const [text, setText] = useState("");

	const textChange = (e) => {
		setText(e.target.value);
	};
	const addTodo = () => {
		setTodos([...todos, { id: crypto.randomUUID(), title: text }]);
  };
  


	return (
		<>
			<input type="text" value={text} onChange={textChange} />
			<button onClick={addTodo}>추가</button>
			{todos.map((todo) => {
				return <li key={todo.id}>{todo.title}</li>;
			})}
		</>
	);
}

export default App;
