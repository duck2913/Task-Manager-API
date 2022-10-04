import React from "react";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const Task = ({ name, id, completed }) => {
	const queryClient = useQueryClient();

	const { mutate: mutateUpdate } = useMutation(updateTask, {
		onSuccess: () => {
			queryClient.invalidateQueries("tasks");
		},
	});

	function updateTask({ id, completed }) {
		return axios.put(`http://localhost:4000/tasks/${id}`, {
			newName: "",
			completed: !completed,
		});
	}

	function handleDoubleClick(id, completed) {
		mutateUpdate({ id, completed });
	}

	const { mutate: mutateDelete } = useMutation(deleteTask, {
		onSuccess: () => {
			console.log("hello");
			queryClient.invalidateQueries("tasks");
		},
	});
	function handleDelete(id) {
		mutateDelete(id);
	}

	function deleteTask(id) {
		return axios.delete(`http://localhost:4000/tasks/${id}`);
	}

	return (
		<div
			className="bg-white rounded-md shadow-sm p-3 px-8  cursor-pointer flex justify-between items-center"
			onDoubleClick={() => handleDoubleClick(id, completed)}
		>
			<p className={`font-semibold text-sm ${completed ? "line-through" : ""}`}>{name}</p>
			<div>
				<button className="text-sm mr-2 bg-green-200 p-2 rounded-full active:translate-y-2">
					<Link to={`/edit/${id}/${name}`} params={{ oldName: name }}>
						📋
					</Link>
				</button>
				<button
					className="text-sm bg-red-200 p-2 rounded-full active:translate-y-2"
					onClick={() => handleDelete(id)}
				>
					🗑️
				</button>
			</div>
		</div>
	);
};

export default Task;
