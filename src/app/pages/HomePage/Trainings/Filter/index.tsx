import React, { useState, useContext, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Search as SearchIcon } from '@material-ui/icons';

import { FilterContext } from 'app/contexts/FilterContext';

import {
	DropdownList,
	DropdownMenu,
	DropdownMenuButton,
	DropdownMenuTitle,
	DropdownWrapper,
	SearchButton,
} from './components';
import { IFilterState, ISpecializationItem } from './types';
import { SpecializationItemsData } from './data';

import { DropdownListItem } from './DropdownListItem';

import FilterDropdownWrapper from './components/FilterMenuWrapper';
import ControledForm from './components/FormControled';
import API from '../API';

const initialState: IFilterState = {
	specialization: 'Any Speciallization',
	destination: 'All Countries',
};

export const Filter: React.FunctionComponent = () => {
	const { setTrainings } = useContext(FilterContext);

	const [filterState, setFilterState] = useState<IFilterState>(initialState);

	const [specializationItems, setSpecializationItems] = useState<
		Array<ISpecializationItem>
	>(SpecializationItemsData);

	const [specializationMenuState, setSpecializationMenuState] = useState<
		boolean | null
	>(null);

	const ref = useRef<HTMLDivElement | null>(null);

	const handleClickMenuSpecializationItem = (value: string) => {
		const specializationsCheckToogle = SpecializationItemsData.map((item) => {
			if (item.checked === true) {
				const itemCopy = { ...item };
				itemCopy.checked = false;
				return itemCopy;
			}
			if (item.speciality === value) {
				const itemCopy = { ...item };
				itemCopy.checked = true;
				return itemCopy;
			}
			return item;
		});
		setSpecializationItems(specializationsCheckToogle);
	};

	const toogleMenuSpecialization = () =>
		!specializationMenuState
			? setSpecializationMenuState(true)
			: setSpecializationMenuState(false);

	const inputCheckboxSpecializationChange = (
		event: React.ChangeEvent<{
			value: string;
		}>
	) =>
		setFilterState({
			...filterState,
			specialization: event.target.value,
		});

	// Click Search
	const [getId, setGetId] = useState<number | string | undefined>('any');
	useEffect(() => {
		const fetchData = async () => {
			let id = '';
			if (getId !== 'any' && getId) {
				id = `specialities/${getId}`;
			}
			const { data } = await API.get(`internships/${id}`);
			setTrainings?.(data);
		};
		fetchData();
	}, [getId]);

	const handleClickSearch = () => {
		const specialization = specializationItems.find((elem) => elem.checked);
		console.log(specialization?.id);
		setGetId(specialization?.id);
		setSpecializationMenuState(null);
	};
	const handleClickOutside = (event: MouseEvent) => {
		if (!ref?.current?.contains(event.target as Node)) {
			setSpecializationMenuState(null);
		}
	};
	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});
	return (
		<FilterDropdownWrapper>
			<DropdownWrapper>
				<ControledForm ref={ref}>
					<DropdownMenu>
						<DropdownMenuTitle>Specialization</DropdownMenuTitle>
						<DropdownMenuButton
							type="button"
							menuState={specializationMenuState}
							onClick={toogleMenuSpecialization}
						>
							{filterState.specialization}
						</DropdownMenuButton>
					</DropdownMenu>
					<DropdownList menuState={specializationMenuState}>
						{specializationItems.map((item) => (
							<DropdownListItem
								value={item.speciality}
								id={item.id}
								key={uuidv4()}
								check={item.checked}
								inputCheckboxChange={inputCheckboxSpecializationChange}
								click={handleClickMenuSpecializationItem}
							/>
						))}
					</DropdownList>
				</ControledForm>
			</DropdownWrapper>
			<SearchButton aria-label="search" onClick={handleClickSearch}>
				<SearchIcon />
			</SearchButton>
		</FilterDropdownWrapper>
	);
};