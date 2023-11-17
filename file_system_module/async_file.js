const fs = require('fs');

//reading text asynchronously
fs.readFile("./texts/read.txt", (err, data)=> {
    if (err) {
        throw err;
    }
    // console.log(data)

    //writing text asynchronously

    
    fs.writeFile("./texts/read2.txt", data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
})

console.log("testing ASYNCHRONOUS")