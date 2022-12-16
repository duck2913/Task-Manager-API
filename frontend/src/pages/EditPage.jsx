import { useState } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const EditPage = () => {
	const [newName, setNewName] = useState("")
	const [completed, setCompleted] = useState(false)
	const { taskId, oldName } = useParams()
	const [message, setMessage] = useState("")

	function updateTask(newTask) {
		return axios.put(`${process.env.REACT_APP_SERVER_URL}/tasks/${taskId}`, newTask)
	}

	const { mutate, isLoading, isError, error } = useMutation(updateTask, {
		onSuccess: (data) => {
			setMessage(data.data)
			setTimeout(() => {
				setMessage("")
			}, 1000)
		},
	})

	function handleEdit() {
		mutate({
			newName,
			completed,
		})
		setCompleted(false)
		setNewName("")
	}

	return (
		<div className="min-h-screen bg-slate-300 flex flex-col items-center justify-center">
			<div className="form w-[30%] mx-auto bg-white p-5 rounded-md shadow-md">
				<h1 className="text-center mb-4 font-bold text-xl">Edit task</h1>
				<div className="flex mb-3">
					<p className="w-[7rem]">TaskID: </p>
					<p>{taskId}</p>
				</div>
				<div className="flex mb-3">
					<p className="w-[7rem]">Old Name: </p>
					<p>{oldName}</p>
				</div>
				<div className="flex items-center mb-3">
					<p className="w-[7rem]">New Name: </p>
					<input
						type="text"
						className="bg-slate-100 focus:outline-none rounded-lg text-slate-500 p-2"
						value={newName}
						onChange={(e) => {
							setNewName(e.target.value)
						}}
					/>
				</div>
				<div className="flex mb-8">
					<p className="w-[7rem]">Completed: </p>
					<input
						type="checkbox"
						value={completed}
						onChange={(e) => {
							setCompleted(e.target.checked)
						}}
					/>
				</div>
				{message && <p className="text-center text-green-700 font-bold">{message}</p>}
				<button
					className="text-center mx-auto w-[4rem] bg-purple-500 text-white font-semibold rounded-md px-10 py-1 flex justify-center active:translate-y-1"
					onClick={handleEdit}>
					Edit
				</button>
				{isLoading && <p>Loading...</p>}
				{isError && <p>{error}</p>}
			</div>
			<button className="w-[30%] mx-auto bg-black p-2 rounded-md shadow-md mt-[3rem] text-white font-semibold">
				<Link to={"/"}>Go back to tasks</Link>
			</button>
		</div>
	)
}

export default EditPage
