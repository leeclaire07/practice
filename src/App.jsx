import { useState } from "react";

function App() {
	// todo들을 담아서 뿌려줄 state 만들기
	const [todos, setTodos] = useState([]);

	return (
		<>
			{todos.map((todo) => {
				return (
					<li key={todo.id}>
						<h4 style={{ textDecoration: todo.isDone && "line-through" }}>
							{todo.title}
						</h4>
					</li>
				);
			})}
		</>
	);
}

export default App;
