import fs from 'fs'

export function setHighscore(item){
    console.log(item)
}

export function getHighscore(){
    let highscore = fs.readFileSync('./highscore.json')
    highscore = JSON.parse(highscore);
    console.log(highscore)
}

getHighscore()