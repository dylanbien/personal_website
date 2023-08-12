import { mergeStyles } from '@fluentui/merge-styles';
import { IModalStyles } from '@fluentui/react/lib/Modal';

export const moduleItemStyles = mergeStyles({
  cursor: 'pointer',
  border: '1px solid #ccc',
  padding: '20px',
  margin: '.5rem',
  textAlign: 'center',
  borderRadius: '.5rem',
  minWidth: '200px',  
  height: '200px',
  display: 'flex',   
  alignItems: 'center', 

  transform: 'translateY(0)',
  transition: 'transform 0.3s ease-in-out',
  selectors: {
    ':hover': {
      transform: 'translateY(-5px)',
    },
  },
});

export const modalStyles: Partial<IModalStyles> = {
  main: {
    padding: '1rem',
    marginLeft: '5rem',
    marginRight: '5rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    borderRadius: '.5rem',
  },
  scrollableContent: {
    maxHeight: 'calc(100vh - 2rem)',
  },
};


export const imageStyles = mergeStyles({
  height: '50%',
  width: 'auto',
  alignSelf: 'center',
});
