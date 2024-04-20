import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateNodeLabel } from './flowSlice';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function NodeLabelPopup({ nodeId, onSave, onCancel }) {
  const dispatch = useDispatch();
  const [label, setLabel] = useState('');

  const handleSave = () => {
    dispatch(updateNodeLabel({ nodeId, label }));
    onSave(label);
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div style={{ position: 'absolute', top: '250%', right: '-150px', zIndex: 9999 }}>
      <TextField
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        onClick={handleClick} 
        variant="filled"
        label="Enter node label"
        size="small"
      />
      <Button onClick={handleSave}>Save</Button>
      <Button onClick={onCancel}>Cancel</Button>
    </div>
  );
}

export default NodeLabelPopup;
