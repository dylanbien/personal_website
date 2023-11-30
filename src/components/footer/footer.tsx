import React from 'react';
import { Stack } from '@fluentui/react';

import { footerStyles } from './footer.styles';
import { IconItem } from '../shared/icon-item';
import { TextDocumentIcon, GitGraphIcon, PeopleIcon } from '@fluentui/react-icons-mdl2';

export const Footer: React.FC = () => {
  return (
       <Stack horizontal tokens={{ childrenGap: 8 }} className={footerStyles}>
        <IconItem to="https://www.linkedin.com/in/dylan-bienstock/" text="LinkedIn" icon={<PeopleIcon />} isExternal={true} />
        <IconItem to="./default_resume.pdf" text="Resume" icon={<TextDocumentIcon />}  isExternal={true}/>
        <IconItem to="https://github.com/dylanbien" text="Github" icon={<GitGraphIcon />} isExternal={true} />
      </Stack>
  );
};
