import { atom, selector } from "recoil";

export enum Categories {
	"TO_DO" = "TO_DO",
	"DOING" = "DOING",
	"DONE" = "DONE",
}

export interface IToDo {
	text: string;
	id: number;
	category: Categories;
}

export const categoryState = atom<Categories>({
	key: "category",
	default: Categories.TO_DO,
});

const localStorageToDos = JSON.parse(localStorage.getItem("ToDos") as any);

export const toDoState = atom<IToDo[]>({
	key: "toDo",
	default: localStorageToDos?.length > 0 ? localStorageToDos : [],
});

export const toDoSelector = selector({
	key: "toDoSelector",
	get: ({ get }) => {
		const toDos = get(toDoState);
		const category = get(categoryState);
		return toDos.filter((toDo) => toDo.category === category);
	},
});
