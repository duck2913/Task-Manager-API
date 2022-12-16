import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

const InputForm = () => {
	const [task, setTask] = useState("")
	const queryClient = useQueryClient()

	function handleSubmit(e) {
		e.preventDefault()
		mutate(task)
		setTask("")
	}

	function addTask(task) {
		return axios.post(`${process.env.REACT_APP_SERVER_URL}/tasks`, { name: task })
	}

	const { mutate, isLoading, isError, error } = useMutation(addTask, {
		onSuccess: () => {
			queryClient.invalidateQueries("tasks")
		},
	})

	return (
		<form className="bg-white p-10 w-full text-center rounded-md shadow-sm" onSubmit={handleSubmit}>
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
			{isLoading && <p>Adding a task ...</p>}
			{isError && <p>{error}</p>}
		</form>
	)
}

export default InputForm
