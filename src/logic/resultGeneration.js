import ResultPage1 from '../components/Results/r1';
import ResultPage2 from '../components/Results/r2';
import ResultPage3 from '../components/Results/r3';
import ResultPage4 from '../components/Results/r4';
import ResultPage5 from '../components/Results/r5';
import ResultPage6 from '../components/Results/r6';
import ResultPage7 from '../components/Results/r7';
import ResultPage8 from '../components/Results/r8';

function determineResult(answers) {
    let FirstAnswerCount = 0;
    let SecondAnswerCount = 0;
    let FirstThreeQuestion = '';
    let MiddleThreeQuestion = '';
    let LastThreeQuestion = '';
    let Result = '';

    for (let i = 1; i <= 3; i++) {
        if (answers[i] === 'first') {
            FirstAnswerCount++;
        } else {
            SecondAnswerCount++;
        }
    }
    if (FirstAnswerCount > SecondAnswerCount) {
        FirstThreeQuestion = 'A'
    } else (
        FirstThreeQuestion = 'B'
    )

    FirstAnswerCount = 0;
    SecondAnswerCount = 0;

    for (let i = 4; i <= 6; i++) {
        if (answers[i] === 'first') {
            FirstAnswerCount++;
        } else {
            SecondAnswerCount++;
        }
    }

    if (FirstAnswerCount > SecondAnswerCount) {
        MiddleThreeQuestion = 'A'
    } else (
        MiddleThreeQuestion = 'B'
    )

    FirstAnswerCount = 0;
    SecondAnswerCount = 0;

    for (let i = 7; i <= 9; i++) {
        if (answers[i] === 'first') {
            FirstAnswerCount++;
        } else {
            SecondAnswerCount++;
        }
    }

    if (FirstAnswerCount > SecondAnswerCount) {
        LastThreeQuestion = 'A'
    }
    else {
        LastThreeQuestion = 'B'
    }

    Result = FirstThreeQuestion + MiddleThreeQuestion + LastThreeQuestion;

    if (Result === 'BAA') {
        return <ResultPage1 />;
    }
    else if (Result === 'BBA') {
        return <ResultPage2 />;
    }
    else if (Result === 'AAA') {
        return <ResultPage3 />;
    }
    else if (Result === 'ABA') {
        return <ResultPage4 />;
    }
    else if (Result === 'BAB') {
        return <ResultPage5 />;
    }
    else if (Result === 'BBB') {
        return <ResultPage6 />;
    }
    else if (Result === 'AAB') {
        return <ResultPage7 />;
    }
    else if (Result === 'ABB') {
        return <ResultPage8 />;
    }
    else {
        return <div>No result matched the criteria.</div>;
    }
}

export default determineResult;