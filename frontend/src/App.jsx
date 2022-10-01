import "./App.css";
import InputForm from "./components/InputForm";
import TasksList from "./components/TasksList";

function App() {
	return (
		<div className="App bg-slate-200 h-screen w-screen">
			<div className="container w-2/5">
				<InputForm />
				<TasksList />
			</div>
		</div>
	);
}

export default App;
