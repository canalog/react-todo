import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, categoryState } from "../atoms";

const CategorySelect = styled.select`
	background-color: transparent;
	color: ${(props) => props.theme.textColor};
	border: 1px solid white;
	width: 6rem;
	padding: 0.3rem;
	font-size: 1rem;
	text-align: center;
	& option {
		background-color: ${(props) => props.theme.bgColor};
	}
`;
const SelectCategory = () => {
	const [category, setCategory] = useRecoilState(categoryState);
	const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
		setCategory(event.currentTarget.value as Categories);
	};
	return (
		<CategorySelect value={category} onInput={onInput}>
			<option value={Categories.TO_DO}>To Do</option>
			<option value={Categories.DOING}>Doing</option>
			<option value={Categories.DONE}>Done</option>
		</CategorySelect>
	);
};

export default SelectCategory;
