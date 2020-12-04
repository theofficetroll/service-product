const generator = require('./database/helpers/generator.js');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const fs = require('fs');

const generate = (req, res) => {
  const seedData = (callback) => {
    let i = 0;
    let limit = 10000000;
    let document;

    async function generateFile() {
      writer.pipe(fs.createWriteStream('seed.csv'));
      while (i < limit) {
        document = {
          id: i,
          name: generator.getName(),
          gender: generator.getGender(),
          category: generator.getCategory(),
          style: 1,
        }
        writer.write(document);
        if (!writer.write(document)) {
          await new Promise((resolve) => writer.once("drain", resolve));
        }
        ++i;
      }
      writer.end();
    }
    generateFile();
  }
  seedData();
}

generate();

module.exports = {
  generate,
};
