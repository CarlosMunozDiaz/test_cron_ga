var fs = require('fs');

let randomData = [];

for(let i = 0; i < 120; i++) {
    randomData.push(parseInt(Math.random()*100));
}

let randomJson = JSON.stringify(randomData);
let nameJson = 'random_' + Date.now();

fs.writeFile(`${nameJson}.json`, randomJson);