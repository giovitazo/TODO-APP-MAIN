import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function TaskForm(props) {
	const [input, setInput] = useState("");

	const handleChange = (event) => setInput(event.target.value);

	const handleForm = (event) => {
		event.preventDefault();
		const newTask = {
			id: uuidv4(), // Ensure id is generated properly
			text: input.trim(),
			done: false,
		};
		props.onSubmit(newTask);
		setInput(""); // Clear the input after submission
	};

	return (
		<form onSubmit={handleForm} className="task-form">
			<input
				type="text"
				className="task-input"
				placeholder="New task"
				name="text"
				onChange={handleChange}
				value={input} // Controlled input
			/>
			<button className="task-button">Add task</button>
		</form>
	);
}

export default TaskForm;
