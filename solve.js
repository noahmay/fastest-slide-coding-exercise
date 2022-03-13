const events = require('events');
const fs = require('fs');
const readline = require('readline');

async function getFastestSlide(filePath) {
    try {
        const rl = readline.createInterface({
            input: fs.createReadStream(`${__dirname}/${filePath}`),
            crlfDelay: Infinity
        });

        let index = 0;
        let lastLine = undefined;
        rl.on('line', (line) => {
            
            const currentLine = line.split(' ').map(Number);
            if(index > 1) {
                for(let i = 0; i < currentLine.length; i++) {
                    let left = i === 0 ? Infinity : lastLine[i - 1];
                    let right = i === currentLine.length - 1 ? Infinity : lastLine[i];
                    currentLine[i] += Math.min(left, right);
                }
            }
            
            lastLine = currentLine;
            index++;
        });

        await events.once(rl, 'close');
        return Math.min(...lastLine);
    } catch (err) {
        console.error(err);
    }
}
const solve = async (filePath) => {
    const answer = await getFastestSlide(filePath)
    console.log(answer);
}
solve(process.argv[2])
