import React, { useState } from 'react';
import './q8.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Question8({ goToNextQuestion }) {
  const [buttonState, setButtonState] = useState({ first: 0, second: 0 });

  const handleButtonClick = (buttonKey) => {
    setButtonState(prevState => {
      const newState = { first: 0, second: 0 };
      newState[buttonKey] = prevState[buttonKey] + 1;

      if (newState[buttonKey] === 2) {
        goToNextQuestion(buttonKey);
        console.log('Q8', buttonKey);
      }

      return newState;
    });
  };

  return (
    <div className='q8-container'>
      <Stack className='q8-stack' direction="column" spacing={2}>
        <Button 
          variant="contained" 
          color="grey" 
          startIcon={buttonState.first === 1 ? <CheckCircleOutlineIcon /> : null}
          onClick={() => handleButtonClick('first')}
        >
         测就测咯
        </Button>
        <Button 
          variant="contained" 
          color="grey" 
          startIcon={buttonState.second === 1 ? <CheckCircleOutlineIcon /> : null}
          onClick={() => handleButtonClick('second')}
        >
          去景点要紧
        </Button>
      </Stack>
    </div>
  );
}

export default Question8;
