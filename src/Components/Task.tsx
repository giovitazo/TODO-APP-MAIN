function Task({ id, text, done, completeTask, deleteTask }) {
	return (
		<div className={done ? "task-container done" : "task-container"}>
			<div className="task-text" onClick={() => completeTask(id)}>
				{text}
			</div>
			<button className="task-icon" onClick={() => deleteTask(id)}>
				<img src="/assets/images/icon-cross.svg" alt="Delete Task" />
			</button>
		</div>
	);
}

export default Task;
