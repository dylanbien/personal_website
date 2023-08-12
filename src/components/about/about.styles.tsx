import { mergeStyles } from '@fluentui/merge-styles';

export const aboutContainerStyles = mergeStyles({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: 'linear-gradient(to bottom, rgba(255, 142, 83, 0.8), rgba(255, 107, 107, 0.8))',
});

export const nameStyles = mergeStyles({
  fontSize: '75px',
  textAlign: 'center',
  fontFamily: 'Georgia',
  color: 'white',
  marginTop: '1rem',
});

export const imageStyles = mergeStyles({
  width: '300px',
  height: 'auto',
  marginTop: '16px',
  marginBottom: '16px',
  borderRadius: '8px',
  transition: 'transform 0.3s ease-in-out',
  ':hover': {
    transform: 'scale(1.05)',
  },
});

export const textBoxStyles = mergeStyles({
  fontSize: '18px', 
  color: 'white',
  textAlign: 'center',
  margin: '2rem 6vw',
});
