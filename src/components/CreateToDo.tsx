import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from "../atoms";

const ToDoForm = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const ToDoInput = styled.input`
	margin: 1rem;
	padding: 1rem;
	width: 20rem;
	height: 4rem;
	font-size: 1.3rem;
	border-radius: 20px;
	border: none;
	box-shadow: 4px 4px ${(props) => props.theme.accentColor};
`;

const ToDoButton = styled.button`
	border-radius: 2rem;
	width: 2rem;
	height: 2rem;
	font-size: 1.2rem;
`;
interface IForm {
	toDo: string;
}

const CreateToDo = () => {
	const setToDos = useSetRecoilState(toDoState);
	const category = useRecoilValue(categoryState);
	const { register, handleSubmit, setValue } = useForm<IForm>();
	const onSubmit = ({ toDo }: IForm) => {
		setToDos((oldToDos) => {
			const newToDos = [
				...oldToDos,
				{
					text: toDo,
					id: Date.now(),
					category,
				},
			];
			localStorage.setItem("ToDos", JSON.stringify(newToDos));
			return newToDos;
		});
		setValue("toDo", "");
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<ToDoForm>
				<ToDoInput
					{...register("toDo", {
						required: "Please write a To Do",
					})}
					placeholder="Write a to do"
				/>
				<ToDoButton>+</ToDoButton>
			</ToDoForm>
		</form>
	);
};

export default CreateToDo;
