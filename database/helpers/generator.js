module.exports = {
  getPrice: (n) => {
    if (n === 0) {
      n = 10;
    }
    if (n === 1) {
      n = 7;
    }
    let price = Math.ceil(Math.floor(Math.random() * n * 100) / 10) * 10;
    if (price > 1000) {
      price = Math.ceil(price / 100) * 10;
    }
    return price;
  },

  getName: (n) => {
    let names = ['GTX', 'NDA', 'Columbus', 'Ultimate', 'Zen', 'Beach', 'Norwin', 'Aeriox', 'Arakna', 'Groove', 'Zoom', 'GenMax', '3000'];
    // last digit
    let string = '' + n;
    let index = parseInt(string[string.length - 1]);
    let lastIndex = names.length - 1;

    let name = names[lastIndex - index] + ' ' + names[index];
    return name;
  },

  getGender: (n) => {
    return ['male', 'female'][n % 2];
  },

  getCategory: () => {
    const categories = ['Trail Running', 'Mountain Climbing', 'Everyday', 'Active'];
    return categories[Math.floor(Math.random() * categories.length)];
  },

  getOptions: (n) => {
    let options = ['Member Select', 'Sustainable Material', ''];
    return options[Math.floor(Math.random() * options.length)];
  }
};

