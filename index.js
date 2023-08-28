var fs = require('fs');

let randomData = [];

for(let i = 0; i < 120; i++) {
    randomData.push(parseInt(Math.random()*100));
}

let randomJson = JSON.stringify(randomData);
let nameJson = 'random_' + Date.now();

//fs.writeFile(`${nameJson}.json`, randomJson);
fs.writeFile("./data.json", randomJson, (err) => err && console.error(err));

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});