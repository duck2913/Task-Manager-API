import React from "react";
import { Link } from "react-router-dom";

const Task = ({ name, id, completed }) => {
	function handleDelete() {}

	return (
		<div className="bg-white rounded-md shadow-sm p-3 px-8 flex justify-between items-center">
			<p className={`font-semibold text-sm ${completed ? "line-through" : ""}`}>{name}</p>
			<div>
				<button className="text-sm mr-2 bg-green-200 p-2 rounded-full">
					<Link to={`/edit/${id}/${name}`} params={{ oldName: name }}>
						📋
					</Link>
				</button>
				<button
					className="text-sm bg-red-200 p-2 rounded-full"
					onClick={() => handleDelete}
				>
					🗑️
				</button>
			</div>
		</div>
	);
};

export default Task;
