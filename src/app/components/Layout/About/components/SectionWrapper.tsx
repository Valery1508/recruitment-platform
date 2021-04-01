import styled from 'styled-components';

type SectionWrapperProps = {
	background: string,
};

export const SectionWrapper = styled.section`
	background-image: url(${(props: SectionWrapperProps) =>
		props.background || ''});
	font-family: poppins, open sans, Arial, sans-serif;
	width: 100%;
	max-width: 1000px;
	min-height: 300px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 16px;
	white-space: pre-line;
	background-repeat: no-repeat;
	background-position: right top;
	margin-bottom: 60px;
	padding-top: 20px;
	& > * {
		width: 60%;
	}
	&:nth-of-type(even) {
		background-position: left;
		align-items: flex-end;
	}
`;
