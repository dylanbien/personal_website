import React from 'react';
import { Link } from 'react-scroll';
import { iconItemStyles, iconContainerStyles, iconStyles } from './icon-item.styles';

interface IIconItem {
  to: string;
  text: string;
  icon: JSX.Element;
  isExternal?: boolean;
}

const renderIconContent = (icon: JSX.Element, text: string) => (
  <div className={iconContainerStyles}>
    <span className={iconStyles}>{icon}</span>
    <span className="text">{text}</span>
  </div>
);

export const IconItem: React.FC<IIconItem> = ({ to, text, icon, isExternal }) => {
  if (isExternal) {
    return (
      <a href={to} className={iconItemStyles} target="_blank" rel="noopener noreferrer">
        {renderIconContent(icon, text)}
      </a>
    );
  } else {
    return (
      <Link to={to} smooth={true} duration={500} className={iconItemStyles}>
        {renderIconContent(icon, text)}
      </Link>
    );
  }
};