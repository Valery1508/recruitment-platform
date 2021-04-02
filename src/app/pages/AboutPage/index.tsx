import React from 'react';
import { AboutSection } from '../../components/Layout/About/AboutSection';
import { aboutData } from './aboutData';

export const AboutPage: React.FunctionComponent = () => (
	<React.Fragment>
		{aboutData.map((section) => (
			<AboutSection
				title={section.title}
				text={section.text}
				background={section.background}
				backgroundAside={section.backgroundAside}
				linkText={section.linkText}
				linkUrl={section.linkUrl}
			/>
		))}
	</React.Fragment>
);
