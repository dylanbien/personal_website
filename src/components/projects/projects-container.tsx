import React from 'react';
import { Stack } from '@fluentui/react';
import { titleStyles,projectStackStyles, projectContainerStyles } from './projects.styles';
import { ModuleItem } from '../shared/module-item';

import jsonData from './projects.strings.json';

const projects = jsonData.projects;

export const ProjectContainer: React.FC = () => {
  return (
    <div className={projectContainerStyles}>
    <div className={titleStyles}>Project</div>
    <Stack horizontalAlign="center" className={projectStackStyles} >
      {projects.map((project: any, index: number) => (
        <ModuleItem key={index} {...project} />
      ))}
    </Stack>
    </div>
  );
};
