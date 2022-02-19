import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, IToDo, toDoState } from "../atoms";

const ToDoElement = styled.div`
	width: 20rem;
	background-color: ${(props) => props.theme.accentColor};
	padding: 1rem;
	margin: 0.5rem;
	border-radius: 20px;
	p {
		width: 95%;
		font-size: 1.2rem;
	}
	div {
		text-align: right;
		margin-top: 5px;
		button {
			font-size: 0.8rem;
			margin: 0 0.2rem;
			background-color: ${(props) => props.theme.textColor};
			border: none;
			box-shadow: 3px 3px ${(props) => props.theme.bgColor};
		}
	}
`;
const ToDo = ({ text, category, id }: IToDo) => {
	const setToDos = useSetRecoilState(toDoState);
	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const {
			currentTarget: { name },
		} = event;
		setToDos((oldToDos) => {
			const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
			const newToDo = { text, id, category: name as IToDo["category"] };
			const newToDos = [...oldToDos];
			newToDos.splice(targetIndex, 1, newToDo);
			localStorage.setItem("ToDos", JSON.stringify(newToDos));
			return newToDos;
			// return [
			// 	...oldToDos.slice(0, targetIndex),
			// 	newToDo,
			// 	...oldToDos.slice(targetIndex + 1),
			// ];
		});
	};
	const onClickDelete = () => {
		setToDos((oldToDos) => {
			const newToDos = oldToDos.filter((toDo) => toDo.id !== id);
			localStorage.setItem("ToDos", JSON.stringify(newToDos));
			return newToDos;
		});
	};
	return (
		<ToDoElement>
			<p>{text}</p>
			<div>
				{category !== Categories.TO_DO && (
					<button name={Categories.TO_DO} onClick={onClick}>
						To Do
					</button>
				)}
				{category !== Categories.DOING && (
					<button name={Categories.DOING} onClick={onClick}>
						Doing
					</button>
				)}
				{category !== Categories.DONE && (
					<button name={Categories.DONE} onClick={onClick}>
						Done
					</button>
				)}
				{<button onClick={onClickDelete}>Delete</button>}
			</div>
		</ToDoElement>
	);
};

export default ToDo;
