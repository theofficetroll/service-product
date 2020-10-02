module.exports = {
  getPrice: (n) => {
    if (n === 1) {
      n = 7;
    }
    return Math.floor(Math.random() * n * 100);
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
    // let arr = Array(3).fill().map((_, i) => {
    //   arr[i] = options[Math.floor(Math.random() * options.length)];
    // })
  }
};

