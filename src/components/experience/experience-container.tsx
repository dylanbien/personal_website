import React from 'react';
import { Stack } from '@fluentui/react';
import { titleStyles,experienceStackStyles, experienceContainerStyles } from './experience.styles';
import { ModuleItem } from '../shared/module-item';

import jsonData from './experience.strings.json';

const experiences = jsonData.experiences;


export const ExperienceContainer: React.FC = () => {
  return (
    <div className={experienceContainerStyles}>
    <div className={titleStyles}>Experience</div>
    <Stack horizontalAlign="center" className={experienceStackStyles}>
      {experiences.map((experience: any, index: number) => (
        <ModuleItem key={index} {...experience} />
      ))}
    </Stack>
    </div>
  );
};
