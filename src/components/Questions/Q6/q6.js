import React, { useState } from 'react';
import './q6.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Question6({ goToNextQuestion }) {
  const [buttonState, setButtonState] = useState({ first: 0, second: 0 });

  const handleButtonClick = (buttonKey) => {
    setButtonState({ ...buttonState, [buttonKey]: 1 });
    goToNextQuestion(buttonKey);
  };

  return (
    <div className='q6-container'>
      <Stack className='q6-stack' direction="column" spacing={2}>
        <Button 
          variant="contained" 
          color="grey" 
          startIcon={buttonState.first === 1 ? <CheckCircleOutlineIcon /> : null}
          onClick={() => handleButtonClick('first')}
        >
            拉上一大堆朋友一块嗨
        </Button>
        <Button 
          variant="contained" 
          color="grey" 
          startIcon={buttonState.second === 1 ? <CheckCircleOutlineIcon /> : null}
          onClick={() => handleButtonClick('second')}
        >
          找一个知心的朋友散步唠嗑
        </Button>
      </Stack>
    </div>
  );
}

export default Question6;
