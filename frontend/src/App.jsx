import InputForm from "./components/InputForm";
import TasksList from "./components/TasksList";

function App() {
	return (
		<div className="App bg-slate-200 min-h-screen max-w-screen py-[3rem] ">
			<div className="w-2/5 mx-auto ">
				<InputForm />
				<TasksList />
			</div>
		</div>
	);
}

export default App;
