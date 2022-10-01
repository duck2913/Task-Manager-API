import React from "react";
import Task from "./Task";

const TasksList = () => {
	const tasksLists = [
		{
			name: "Di choi cau long",
		},
	];
	return (
		<div className="mt-10 flex flex-col gap-3">
			{tasksLists.map((task) => (
				<Task name={task.name} />
			))}
		</div>
	);
};

export default TasksList;
