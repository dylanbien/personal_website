import React from 'react';
import { aboutContainerStyles, nameStyles, imageStyles, textBoxStyles } from './about.styles';
import strings from './about.strings.json';

const imageUrl = '/self.jpg';
const aboutText = 'I am a software engineer with a passion for building products that make a difference. I am currently a senior at the University of California, Berkeley, studying Electrical Engineering and Computer Science. I am seeking full-time opportunities in software engineering, product management, and data science.';

export const AboutContainer: React.FC = () => {
  return (
    <div className={aboutContainerStyles}>
      <div className={nameStyles}>Dylan Bienstock</div>

      <img src={imageUrl} alt="Me" className={imageStyles} />
      <div className={textBoxStyles}>{strings['about']}</div>
    </div>
  );
};
