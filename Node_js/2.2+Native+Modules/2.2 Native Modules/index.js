const fs = require("fs");

fs.writeFile( "hello.txt", "How are you nikku ?", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
} );