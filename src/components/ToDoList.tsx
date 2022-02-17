import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";

import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const ToDoList = () => {
	const toDos = useRecoilValue(toDoState);
	/* const [toDos, setToDos] = useRecoilState(toDoState); // get + modify value
	const value = useRecoilValue(toDoState); // Get value from atom
	const modFn = useSetRecoilState(toDoState); // Modify value of atom */

	console.log(toDos);
	return (
		<div>
			<h1>To Dos</h1>
			<hr />
			<CreateToDo />
			<ul>
				{toDos.map((toDo) => (
					<ToDo key={toDo.id} {...toDo} />
				))}
			</ul>
		</div>
	);
};

/* interface IForm {
	email: string;
	firstName: string;
	lastName: string;
	username: string;
	password: string;
	password1: string;
	extraError?: string;
}
const ToDoList = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<IForm>({
		defaultValues: {
			email: "@naver.com",
		},
	});
	const onValid = (data: IForm) => {
		if (data.password !== data.password1) {
			setError(
				"password1",
				{ message: "Passwords are not the same" },
				{ shouldFocus: true }
			);
		}
		// setError("extraError", { message: "Server offline" });
	};
	console.log(errors);
	return (
		<div>
			<form
				style={{ display: "flex", flexDirection: "column" }}
				onSubmit={handleSubmit(onValid)}
			>
				<input
					{...register("email", {
						required: "Email is required",
						pattern: {
							value: /^[A-Za-z0-9._%+-]+@naver.com$/,
							message: "Only naver.com emails are allowed",
						},
					})}
					placeholder="Email"
				/>
				<span>{errors?.email?.message}</span>
				<input
					{...register("firstName", {
						required: "Write here",
						validate: {
							noNico: (value) =>
								!value.includes("nico") || "No nicos allowed",
							noNick: (value) =>
								!value.includes("nick") || "No Nicks allowed",
						},
					})}
					placeholder="First Name"
				/>
				<span>{errors?.firstName?.message}</span>
				<input
					{...register("lastName", {
						required: "Last Name is required",
					})}
					placeholder="Last Name"
				/>
				<span>{errors?.lastName?.message}</span>
				<input
					{...register("username", { required: true, minLength: 10 })}
					placeholder="Username"
				/>
				<span>{errors?.username?.message}</span>
				<input
					{...register("password", {
						required: true,
						minLength: {
							value: 5,
							message: "Your password is too short",
						},
					})}
					placeholder="Password"
				/>
				<span>{errors?.password?.message}</span>
				<input
					{...register("password1", {
						required: "Password is required",
					})}
					placeholder="password1"
				/>
				<span>{errors?.password1?.message}</span>
				<button>Add</button>
				<span>{errors?.extraError?.message}</span>
			</form>
		</div>
	);
}; */
export default ToDoList;
