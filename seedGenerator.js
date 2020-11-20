const generator = require('./database/helpers/generator.js');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const fs = require('fs');

const generate = (req, res) => {
  const seedData = (callback) => {
    let limit = 1000000;
    let i = 0;

    writer.pipe(fs.createWriteStream('seed.csv'));
    while (i < limit) {
      for (let j = 0; j < 3; j++) {
        let style = i * 3 + j;
        writer.write({
          productId: i,
          name: generator.getName(),
          gender: generator.getGender(),
          category: generator.getCategory(),
          style: style,
        })
      }
      i++;
    }
    writer.end();
  };
  seedData();
}

generate();

module.exports = {
  generate,
};
