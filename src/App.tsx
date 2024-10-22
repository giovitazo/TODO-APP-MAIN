import { useState } from "react";
import Header from "./Components/Header";
import TaskApp from "./Components/TaskApp";
import "./app.scss";

function App() {
	const [darkmode, setDarkMode] = useState(false);
	const toggleDarkMode = () => {
		setDarkMode(!darkmode);
	};

	return (
		<div className={`${darkmode ? "main-element darkmode" : "main-element"}`}>
			<Header darkmode={darkmode} toggleDarkmode={toggleDarkMode} />
			<div className="taskApp-container">
				<TaskApp />
			</div>
		</div>
	);
}

export default App;
