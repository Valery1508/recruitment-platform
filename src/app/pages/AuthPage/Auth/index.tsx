import React from 'react';
// Libs
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';

// Types
import {
	IDefaultValueInputForm,
	IFormInput,
} from 'app/pages/AuthPage/Auth/types';

// Custom hooks
import useMocoServer from './hooks/useMocoServer';

// helpers
import { validation } from './helpers/validation';

// Components
import { AuthErrorLabel, AuthWrapper, AuthForm } from './components/styled';
import { ButtonSubmint } from './components/ButtonSubmint';
import {
	Title,
	InputPassword,
	CheckBoxRemember,
	InputEmail,
} from './components';

const defaultValues: IDefaultValueInputForm = {
	email: '',
	password: '',
	checkbox: false,
};

export const Auth: React.FunctionComponent = () => {
	const { isAuth, fetchRequestLogin } = useMocoServer();
	const { handleSubmit, errors, register, control } = useForm({
		defaultValues,
	});

	const getInputsForm = (dataLogin: IFormInput) => {
		fetchRequestLogin(dataLogin);
	};

	return (
		<>
			<AuthWrapper elevation={10}>
				<Title />
				<AuthForm noValidate onSubmit={handleSubmit(getInputsForm)}>
					<InputEmail ref={register(validation.email)} />
					{errors.email && (
						<AuthErrorLabel>{errors.email.message}</AuthErrorLabel>
					)}
					<InputPassword ref={register(validation.password)} />
					{errors.password && (
						<AuthErrorLabel>{errors.password.message}</AuthErrorLabel>
					)}
					<CheckBoxRemember control={control} />
					<ButtonSubmint />
				</AuthForm>
				{isAuth && <Redirect exact from="/" to="/admin" />}
			</AuthWrapper>
			<p>eve.holt@reqres.in</p>
			<p>cityslicka</p>
		</>
	);
};
