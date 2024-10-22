import { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

function TaskApp() {
	const [tasks, setTasks] = useState([]);

	// Add task to the list
	const addTask = (task) => {
		if (task.text.trim()) {
			task.text = task.text.trim();
			const updatedTasks = [task, ...tasks];
			setTasks(updatedTasks);
		}
	};

	// Delete task from the list
	const deleteTask = (id) => {
		const updatedTasks = tasks.filter((task) => task.id !== id);
		setTasks(updatedTasks); // Ensure state is updated with the filtered tasks
	};

	// Toggle task completion
	const completeTask = (id) => {
		const updatedTasks = tasks.map((task) => {
			if (task.id === id) {
				task.done = !task.done;
			}
			return task;
		});
		setTasks(updatedTasks); // Ensure state is updated with the modified task
	};

	return (
		<section className="task-app">
			<TaskForm onSubmit={addTask} />
			<div className="task-list-container">
				{tasks.map((task) => (
					<Task
						key={task.id}
						id={task.id}
						text={task.text}
						done={task.done}
						completeTask={completeTask}
						deleteTask={deleteTask}
					/>
				))}
			</div>
		</section>
	);
}

export default TaskApp;
