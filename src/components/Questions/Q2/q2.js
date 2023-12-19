import React, { useState } from 'react';
import './q2.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Question2({ goToNextQuestion }) {
  const [buttonState, setButtonState] = useState({ first: 0, second: 0 });

  const handleButtonClick = (buttonKey) => {
    setButtonState({ ...buttonState, [buttonKey]: 1 });
    goToNextQuestion(buttonKey);
  };

  return (
    <div className='q2-container'>
      <Stack className='q2-stack' direction="column" spacing={2}>
        <Button 
          variant="contained" 
          color="grey" 
          startIcon={buttonState.first === 1 ? <CheckCircleOutlineIcon /> : null}
          onClick={() => handleButtonClick('first')}
        >
          哇好有意境
        </Button>
        <Button 
          variant="contained" 
          color="grey" 
          startIcon={buttonState.second === 1 ? <CheckCircleOutlineIcon /> : null}
          onClick={() => handleButtonClick('second')}
        >
          得回家收衣服了
        </Button>
      </Stack>
    </div>
  );
}

export default Question2;
