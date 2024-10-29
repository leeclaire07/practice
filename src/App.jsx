import { useState } from "react";

function App() {
  // todo들을 담아서 뿌려줄 state 만들기
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
