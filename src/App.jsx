import { useState } from "react";

function App() {
	// state는 짝꿍만 변경할 수 있다.
	const [todos, setTodos] = useState([]);

	// input이랑 state 만들어서 value onChange로 엮기
	const [text, setText] = useState("");

	const textChange = (e) => {
		setText(e.target.value);
	};

	// 버튼 만들어서 todos state에 input value 추가하기
  const handleAddTodo = () => {
    // todos 짝꿍인 setTodos로 todos 변경하기
    // 스프레드 어쩌구로 기존에 있던 todos 풀어주고 input으로 받은 text로 새로운 todo 만들기
		setTodos([...todos, { id: crypto.randomUUID(), title: text }]);
  };
  
	return (
		<>
			<input type="text" value={text} onChange={textChange} />
			<button onClick={handleAddTodo}>추가</button>
			{todos.map((todo) => {
				return <li key={todo.id}>{todo.title}</li>;
			})}
		</>
	);
}

export default App;
