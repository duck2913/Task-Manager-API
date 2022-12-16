import React from "react"
import Task from "./Task"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const TasksList = () => {
	const fetchTasks = () => {
		return axios.get(`${process.env.REACT_APP_SERVER_URL}/tasks`)
	}

	const { isLoading, isError, error, data } = useQuery(["tasks"], fetchTasks)

	return (
		<div className="mt-[3rem] flex flex-col gap-3">
			{isLoading && <p className="m-5 text-center">Loading...</p>}
			{isError && <p>{error}</p>}
			{data?.data?.map((task) => (
				<Task name={task.name} key={task.id} id={task.id} completed={task.completed} />
			))}
		</div>
	)
}

export default TasksList
