import { mergeStyles } from '@fluentui/merge-styles';

export const headerStyles = mergeStyles({
  position: 'sticky', 
  top: 0,   
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  background: 'linear-gradient(to bottom, rgba(255, 107, 107, 0.8), rgba(255, 142, 83, 0.8))', 
  padding: '1.25rem 2rem',
  color: 'white',
  fontSize: '1.875rem',
  height: '10rem',
  zIndex: 1000,
  transition: 'background-color 2s ease-in-out',
});

