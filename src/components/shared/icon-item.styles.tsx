import { mergeStyles } from '@fluentui/merge-styles';

export const iconItemStyles = mergeStyles({
  cursor: 'pointer',
  transition: 'background-color 0.3s, color 0.3s, transform 0.2s',
  padding: '.5rem 0rem',
  borderRadius: '4px',
  color: 'inherit', 
  textDecoration: 'none', 
  ':hover': {
    backgroundColor: 'white',
    color: '#FF6B6B',
    transform: 'scale(1.05)',
  },
});


export const iconContainerStyles = mergeStyles({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: 0,
  maxWidth: '100%',
  maxHeight: '100%',
});
  
export const iconStyles = mergeStyles({
  fontSize: '30px', 
  '@media (max-width: 800px)': {
    fontSize: '20px',
  },
  marginBottom: '.25rem', 
});

export const textStyles = mergeStyles({
  fontSize: '30px', 
  '@media (max-width: 800px)': {
    fontSize: '20px',
  },
});