const abc = [   'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
                'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
            ]

let max = 20;
let min = 20;

let wordLength = Math.random() * (max - min) + min
wordLength = wordLength.toFixed()

export function generateRandomString(){
    // let randomStringArr = []
    // let randomString = ''

    // for(let i = 0; i < wordLength; i++){
    //     let number = Math.random() * (abc.length - 1)
    //     number = number.toFixed()
    //     randomString = randomString + abc[number]
    //     randomStringArr.push(abc[number])
    // } 
    // return {
    //     string: randomString,
    //     arr: randomStringArr
    // }

        
    return {
        string: 'zbnuwredkfnxzjbnbyrf',
        arr: [
        'z',  'b',  'n',  'u', 'w',
        'r', 'e', 'd', 'k', 'f',
        'n',  'x',  'z',  'j', 'b',
        'n',  'b',  'y',  'r', 'f'
        ]
    }

}
