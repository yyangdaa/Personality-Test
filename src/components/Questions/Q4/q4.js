import React, { useState } from 'react';
import './q4.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Question4({ goToNextQuestion }) {
  const [buttonState, setButtonState] = useState({ first: 0, second: 0 });

  const handleButtonClick = (buttonKey) => {
    setButtonState({ ...buttonState, [buttonKey]: 1 });
    goToNextQuestion(buttonKey);
  };
  
  return (
    <div className='q4-container'>
      <Stack className='q4-stack' direction="column" spacing={2}>
        <Button 
          variant="contained" 
          color="grey" 
          startIcon={buttonState.first === 1 ? <CheckCircleOutlineIcon /> : null}
          onClick={() => handleButtonClick('first')}
        >
            阳光冲浪的沙滩
        </Button>
        <Button 
          variant="contained" 
          color="grey" 
          startIcon={buttonState.second === 1 ? <CheckCircleOutlineIcon /> : null}
          onClick={() => handleButtonClick('second')}
        >
          安静却不乏烟火气的小镇
        </Button>
      </Stack>
    </div>
  );
}

export default Question4;
