import state from './state.js'
import {setHighscore} from '../highscore.js'

function submitWord (word) {

    let checkArr = state.randomString.arr;
    let submitArr = word.split('');

    let points = 0;
    
    // Prüft ob buchstaben im Userinput mit dem zufalls generierten String überein stimmen
    for(let i = 0; i < submitArr.length; i++){
        if(checkArr.filter(x => x == submitArr[i]).length == 0){
            return 'Invalid letter'
        } 
        else {
            for(let y = 0; y < checkArr.length; y++){
                if(checkArr[y] == submitArr[i]){
                    points++;
                    checkArr[y] = null; 
                    break;
                } 
            }
        }
    }
    let result = state.wordList.filter(x => x == word)
    if(result.length == 0){
        return 'Invalid Word'
    } else {
        let item = {
            submission: word,
            points: points, 
            string: state.randomString.string 
        }
        setHighscore(item)
        return `${points} Points!`
    }
};


function getWordEntryAtPosition (position) {
     console.log(position);
    return "";
};

function getScoreAtPosition(position) {
    console.log(position);
 return 0;
};
 

export { submitWord, getWordEntryAtPosition, getScoreAtPosition }