import { useState } from "react";

function App() {
	const [todos, setTodos] = useState([]);
	const [text, setText] = useState("");

	return (
		<>
			<input
				type="text"
				value={text}
				onChange={(e) => {
					setText(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					setTodos([...todos, { id: crypto.randomUUID(), title: text }]);
				}}
			>
				추가
			</button>
			{todos.map((todo) => {
				return (
					<li key={todo.id}>
						<h4 style={{ textDecoration: todo.isDone && "line-through" }}>
							{todo.title}
						</h4>
						<button
							// 삭제 함수 만들고 버튼에 엮기
							onClick={() => {
								// create 때와 마찬가지로 todos를 변경하는 것이므로 setTodos를 사용한다
								// filter를 이용해 todo.id !== target 조건식이 true인 객체만으로 이루어진 배열을 setTodos 해준다
								setTodos(todos.filter((prev) => prev.id !== todo.id));
							}}
						>
							삭제
						</button>
					</li>
				);
			})}
		</>
	);
}

export default App;
