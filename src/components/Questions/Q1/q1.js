import React, { useState } from 'react';
import './q1.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Question1({ goToNextQuestion }) {
  const [buttonState, setButtonState] = useState({ first: 0, second: 0 });

  const handleButtonClick = (buttonKey) => {
    setButtonState(prevState => {
      const newState = { first: 0, second: 0 };
      newState[buttonKey] = prevState[buttonKey] + 1;

      if (newState[buttonKey] === 2) {
        goToNextQuestion(buttonKey);
        console.log('Q1', buttonKey);
      }

      return newState;
    });
  };

  return (
    <div className='q1-container'>
      <Stack className='q1-stack' direction="column" spacing={2}>
        <Button 
          variant="contained" 
          color="grey" 
          startIcon={buttonState.first === 1 ? <CheckCircleOutlineIcon /> : null}
          onClick={() => handleButtonClick('first')}
        >
          以你为原型写的一本书
        </Button>
        <Button 
          variant="contained" 
          color="grey" 
          startIcon={buttonState.second === 1 ? <CheckCircleOutlineIcon /> : null}
          onClick={() => handleButtonClick('second')}
        >
          一个你刚好缺的东西
        </Button>
      </Stack>
    </div>
  );
}

export default Question1;
