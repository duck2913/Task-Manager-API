import InputForm from "./components/InputForm";
import TasksList from "./components/TasksList";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
function App() {
	return (
		<div className="App bg-slate-200 min-h-screen max-w-screen py-[3rem] ">
			<div className="w-2/5 mx-auto ">
				<InputForm />
				<TasksList />
			</div>
			<ReactQueryDevtools />
		</div>
	);
}

export default App;
