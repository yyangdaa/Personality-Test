import React, { useState } from 'react';
import './q5.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Question5({ goToNextQuestion }) {
  const [buttonState, setButtonState] = useState({ first: 0, second: 0 });

  const handleButtonClick = (buttonKey) => {
    setButtonState(prevState => {
      const newState = { first: 0, second: 0 };
      newState[buttonKey] = prevState[buttonKey] + 1;

      if (newState[buttonKey] === 2) {
        goToNextQuestion(buttonKey);
        console.log('Q5', buttonKey);
      }

      return newState;
    });
  };

  return (
    <div className='q5-container'>
      <Stack className='q5-stack' direction="column" spacing={2}>
        <Button 
          variant="contained" 
          color="grey" 
          startIcon={buttonState.first === 1 ? <CheckCircleOutlineIcon /> : null}
          onClick={() => handleButtonClick('first')}
        >
          灯光蹦迪的东海滩
        </Button>
        <Button 
          variant="contained" 
          color="grey" 
          startIcon={buttonState.second === 1 ? <CheckCircleOutlineIcon /> : null}
          onClick={() => handleButtonClick('second')}
        >
            吉他篝火的西海滩
        </Button>
      </Stack>
    </div>
  );
}

export default Question5;
