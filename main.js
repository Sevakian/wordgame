import state from './src/state.js'
import readline from 'readline'
import { getTxtFile } from './readTxtfile.js'
import { generateRandomString } from './src/generateString.js'
import { submitWord, getWordEntryAtPosition, getScoreAtPosition} from './src/wordgame.js'

state.wordList = getTxtFile()
state.randomString = generateRandomString()


const rl = readline.createInterface({
    input : process.stdin, 
    output: process.stdout
})


rl.question(`String ${state.randomString.string} \n Enter your word: `, 
    (userInput) => {
        let result = submitWord(userInput)
        console.log(result);
        rl.close();

    }
)

// rl.on('close', ()=> {
//     // console.log(state.user)
//     console.log(state.wordList);
//     console.log("bye")
// })


