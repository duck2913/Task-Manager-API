import { useState } from "react";

const InputForm = () => {
	const [task, setTask] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<form
			className="bg-white p-10 w-full text-center rounded-md shadow-sm"
			onSubmit={handleSubmit}
		>
			<h1 className="font-semibold text-xl">Task Manager</h1>
			<div className="flex mt-5">
				<input
					type="text"
					placeholder="E.g: Giat do"
					className="bg-gray-200 w-full focus:outline-none rounded-sm p-1 px-5"
					value={task}
					onChange={(e) => setTask(e.target.value)}
				/>
				<button className="bg-purple-600 text-white p-3 py-1">Submit</button>
			</div>
		</form>
	);
};

export default InputForm;
