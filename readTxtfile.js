import fs from 'fs'
export function getTxtFile(){
    try {  
        var data = fs.readFileSync('./wordlist.txt', 'utf8');
        data = data.toString();  
        data = data.split('\n')
        return data
    } catch(e) {
        console.log('Error:', e);
    }
}

