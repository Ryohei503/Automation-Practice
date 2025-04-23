var fs = require('fs');
const { parse } = require('csv-parse');
var path = require('path');

// Read a CSV file and extract test data
function readCSV(filePath) {
    return new Promise((resolve, reject) => {
        const results = [];
        const absolutePath = path.resolve(__dirname, filePath);
        fs.createReadStream(absolutePath)
            .pipe(parse({
                separator: ',',
                columns: true
            }))
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error));
    });
}

module.exports = { readCSV };