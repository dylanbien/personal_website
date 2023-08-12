import { mergeStyles } from '@fluentui/merge-styles';

export const experienceContainerStyles = mergeStyles({
  background: 'linear-gradient(to top, rgba(255, 142, 83, 0.8), rgba(255, 107, 107, 0.8))', 
});

export const experienceStackStyles = mergeStyles({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '40px',
  '@media (max-width: 750px)': {
    flexDirection: 'column',
  },
  magin: '3rem'
});

export const titleStyles = mergeStyles({
  fontSize: '58px',
  textAlign: 'center',
  fontFamily: 'Georgia',
  color: 'white'
});

export const modalContentStyles = mergeStyles({
  padding: '20px',
  maxWidth: '400px',
  margin: '0 auto',
});
