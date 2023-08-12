import React from 'react';
import { Stack } from '@fluentui/react';
import { titleStyles, experienceContainerStyles, experienceStackStyles } from './experience.styles';
import { ModuleItem } from '../shared/module-item';

import jsonData from './experience.strings.json';

const experiences = jsonData.experiences;

export const ExperienceContainer: React.FC = () => {
  return (
    <div className={experienceContainerStyles}>
      <div className={titleStyles}>Experience</div>
      <Stack horizontalAlign="center" className={experienceStackStyles} tokens={{ childrenGap: '40px' }}>
        <Stack horizontalAlign="center" wrap tokens={{ childrenGap: '40px' }}>
          {experiences.slice(0, 2).map((experience: any, index: number) => (
            <ModuleItem key={index} {...experience} />
          ))}
        </Stack>
        <Stack horizontalAlign="center" wrap tokens={{ childrenGap: '40px' }}>
          {experiences.slice(2, 4).map((experience: any, index: number) => (
            <ModuleItem key={index} {...experience} />
          ))}
        </Stack>
      </Stack>
    </div>
  );
};
