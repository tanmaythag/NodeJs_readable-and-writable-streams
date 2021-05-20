const fs = require('fs');
const readStream = fs.createReadStream('./mbox.txt','utf8');
const writeStream = fs.createWriteStream('exam.txt');
readStream.on('data',(chunk)=>{
    writeStream.write(chunk);
});

//instead of on fucction just use pipe
// readStream.pipe(writeStream)