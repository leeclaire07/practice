import { useState } from "react";

function App() {
	const [todos, setTodos] = useState([]);

	return (
		<>
			{todos.map((todo) => {
				return <li key={todo.id}>{todo.title}</li>;
			})}
		</>
	);
}

export default App;
