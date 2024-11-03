import { useState } from "react";

function App() {
	const [todos, setTodos] = useState([]);
	const [text, setText] = useState("");

	const textChange = (e) => {
		setText(e.target.value);
	};

	const handleAddTodo = () => {
		setTodos([
			...todos,
			{ id: crypto.randomUUID(), title: text, isDone: false },
		]);
	};

	const handleRemoveTodo = (target) => {
		setTodos(todos.filter((todo) => todo.id !== target));
	};

	const handleTodoIsDone = (target) => {
		const updatedTodos = todos.map((todo) => {
			// todo의 id가 target이랑 같으면 객체의 isDone만 true로 바꿔서 return 해준다
			if (todo.id === target) {
				return { ...todo, isDone: true };
				// 나머지는 그냥 return 해준다
			} else {
				return todo;
			}
		});

		setTodos(updatedTodos);
	};

	// 간지 버전
	// const handleTodoIsDone = (target) => {
	// 	const updatedTodos = todos.map((todo) =>
	// 		todo.id === target ? { ...todo, isDone: true } : todo
	// 	);
	// 	setTodos(updatedTodos);
	// };

	return (
		<>
			<input type="text" value={text} onChange={textChange} />
			<button onClick={handleAddTodo}>추가</button>
			{todos.map((todo) => {
				return (
					<li key={todo.id}>
						<h4 style={{ textDecoration: todo.isDone && "line-through" }}>
							{todo.title}
						</h4>
						<button onClick={() => handleTodoIsDone(todo.id)}>완료</button>
						<button onClick={() => handleRemoveTodo(todo.id)}>삭제</button>
					</li>
				);
			})}
		</>
	);
}

export default App;
