import React from 'react';

import { IFieldTimeCall } from '../../types';
import { InputTimeCall, SelectWrapper, Select } from '../components';
import LabelTimeCall from '../components/LabelTimeCall';

export const FieldTimeCall: React.FunctionComponent<IFieldTimeCall> = ({
	register,
	timeForCall,
}) => {
	return (
		<InputTimeCall>
			<LabelTimeCall htmlFor="timeForCall">
				Please choose time to call:
			</LabelTimeCall>
			<SelectWrapper>
				<Select
					id="timeForCall"
					name="timeForCall"
					ref={register({ required: true })}
				>
					{timeForCall?.map(({ name, id }) => (
						<option value={name} key={id}>
							{name}
						</option>
					))}
				</Select>
			</SelectWrapper>
		</InputTimeCall>
	);
};