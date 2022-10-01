import React from "react";

const Task = ({ name }) => {
	function handleEdit() {}

	function handleDelete() {}

	return (
		<div className="bg-white rounded-md shadow-sm p-3 font-medium text-md px-8 flex justify-between items-center">
			{name}
			<div>
				<button
					className="text-sm mr-2 bg-green-200 p-2 rounded-full"
					onClick={() => handleEdit}
				>
					📋
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
