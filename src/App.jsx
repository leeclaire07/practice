import { useState } from "react";

function App() {
	const [todos, setTodos] = useState([]);
	const [text, setText] = useState("");

	const textChange = (e) => {
		setText(e.target.value);
	};
	const handleAddTodo = () => {
		setTodos([...todos, { id: crypto.randomUUID(), title: text }]);
	};

	// 삭제 함수 만들고 버튼에 엮기
	const handleRemoveTodo = (target) => {
		// create 때와 마찬가지로 todos를 변경하는 것이므로 setTodos를 사용한다
		// filter를 이용해 todo.id !== target 조건식이 true인 객체만으로 이루어진 배열을 setTodos 해준다
		setTodos(todos.filter((todo) => todo.id !== target));
	};

	return (
		<>
			<input type="text" value={text} onChange={textChange} />
			<button onClick={handleAddTodo}>추가</button>
			{todos.map((todo) => {
				return (
					<li key={todo.id}>
						<h4>{todo.title}</h4>
						<button onClick={() => handleRemoveTodo(todo.id)}>삭제</button>
					</li>
				);
			})}
		</>
	);
}

export default App;
