import React, { useState } from 'react';
import { Stack, Modal } from '@fluentui/react';
import { imageStyles, moduleItemStyles, modalStyles } from './module-item.styles';

interface IModuleItem {
  imageUrl: string;
  title: string;
  bullets: string[];
}

export const ModuleItem: React.FC<IModuleItem> = ({ imageUrl, title, bullets }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Stack
      onClick={handleItemClick}
      className={moduleItemStyles}
      styles={{ root: { backgroundColor: 'white' } }}
    >
      <img src={imageUrl} alt={title} className={imageStyles} />
      <p>{title}</p>
      <Modal isOpen={isModalOpen} onDismiss={handleCloseModal} styles={modalStyles}>
        <Stack tokens={{ childrenGap: 10 }} padding={20}>
          <h2>{title}</h2>
          <ul>
            {bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </Stack>
      </Modal>
    </Stack>
  );
};
