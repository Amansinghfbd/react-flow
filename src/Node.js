import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import NodeLabelPopup from './NodeLabelPopup';

function Node({ id, data, position, onDelete }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDeleteClick = () => {
    onDelete(id);
  };

  const handleNodeClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleLabelSave = () => {
    setIsPopupOpen(false);
  };

  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        padding: '8px',
        border: '1px solid black',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleNodeClick}
    >
      {data && data.label}
      {isHovered && (
        <FaTimes
          style={{ color: 'red', marginLeft: 5, cursor: 'pointer' }}
          onClick={handleDeleteClick}
        />
      )}
      {isPopupOpen && (
        <NodeLabelPopup nodeId={id} onSave={handleLabelSave} onCancel={() => setIsPopupOpen(false)} />
      )}
    </div>
  );
}

export default Node;
