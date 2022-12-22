const fs = require('fs');

// fs works on nonblocking io model, it allows to run other functions before it
fs.readFile('file.txt', 'utf8', (err, data)=>{ // here (err,data) is the callback function which will print error or if the function fails to run
    console.log(err,data)
}) // output is "null" means no error found, file is present
const  a = fs.readFileSync('file.txt')
console.log(a.toString)
console.log(a)
console.log("Finished reading file")

fs.writeFile('file2.txt', 'this is a data', ()=>{ // writefile module writes data into a file
    console.log("written to the file") // confirming data is written
})

b = fs.writeFileSync('file2.txt', "this is a data2")
console.log(b)

fs.appendFile('file1.txt', 'Hello content!', (err, data)=>{
    console.log("saved!")
})
fs.open('file3.txt', 'w', (err,data)=>{ //The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing
//If the file does not exist, an empty file is created:
console.log("opened!")
})
fs.unlink('file3.txt', (err,data)=>{ // unlink used for deletion
    console.log('deleted!')
})
fs.rename('file1.txt', 'file01.txt', (err,data)=>{ // used for renaming
console.log("renamed!")
})