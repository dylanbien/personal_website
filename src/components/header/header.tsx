import React, { useEffect, useState } from 'react';
import { Stack } from '@fluentui/react';
import { IconItem } from '../shared/icon-item';
import { HomeIcon, InfoIcon, DocumentSearchIcon, HistoryIcon, AddIcon } from '@fluentui/react-icons-mdl2';
import { mergeStyles } from '@fluentui/merge-styles';
import { headerStyles } from './header.styles';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const dynamicHeaderStyles = mergeStyles(
    headerStyles,
    {
      background: isScrolled ? 'linear-gradient(to bottom, rgba(255, 107, 107, 1), rgba(255, 142, 83, 1))' : 'linear-gradient(to bottom, rgba(255, 107, 107, 0.8), rgba(255, 142, 83, 0.8))',
    }
  );

  return (
      <Stack horizontal tokens={{ childrenGap: 8 }} className={dynamicHeaderStyles}>
        <IconItem to="home" text="Home" icon={<HomeIcon />} />
        <IconItem to="about" text="About" icon={<InfoIcon />} />
        <IconItem to="experience" text="Experience" icon={<HistoryIcon />} />
        <IconItem to="projects" text="Projects" icon={<DocumentSearchIcon />} />
        <IconItem to="more" text="More" icon={<AddIcon />} />
      </Stack>
  );
};
