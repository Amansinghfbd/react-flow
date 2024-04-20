import { Button } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';

function CreateNodeButton({ onClick }) {
  return (
    <Button endIcon={<AddIcon/>} variant="outlined" size="large" onClick={onClick} style={{ position: 'absolute', left: "50%", top: 10, }}>
      Add Node
    </Button>
  );
}

export default CreateNodeButton;
