import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

const ToDo = ({ text, category, id }: IToDo) => {
	const setToDos = useSetRecoilState(toDoState);
	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const {
			currentTarget: { name },
		} = event;
		setToDos((oldToDos) => {
			const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
			const newToDo = { text, id, category: name as IToDo["category"] };
			// return [
			// 	...oldToDos.slice(0, targetIndex),
			// 	newToDo,
			// 	...oldToDos.slice(targetIndex + 1),
			// ];
			const newToDos = [...oldToDos];
			newToDos.splice(targetIndex, 1, newToDo);
			return newToDos;
		});
	};
	return (
		<li>
			<span>{text}</span>
			{category !== "TO_DO" && (
				<button name="TO_DO" onClick={onClick}>
					To Do
				</button>
			)}
			{category !== "DOING" && (
				<button name="DOING" onClick={onClick}>
					Doing
				</button>
			)}
			{category !== "DONE" && (
				<button name="DONE" onClick={onClick}>
					Done
				</button>
			)}
		</li>
	);
};

export default ToDo;
