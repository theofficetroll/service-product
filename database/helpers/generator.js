module.exports = {
  getPrice: () => {
    let max = 20;
    let min = 6;
    let price = (Math.floor(Math.random() * (max - min)) + min) * 10;
    return price;
  },

  getName: () => {
    let firstList, secondList, firstModifierList, secondModifierList, first, second, firstModifier, secondModifier, name;
    firstList = ['Air', 'Dunk', 'Blazer', 'Mag', 'SB', 'Mars', 'Cortez', 'Zoom', 'Delta', 'React', 'Bobcat', 'Shoe', 'Super', 'SuperRep', 'Renew', 'Fire', 'Wizard', 'Fleet'];
    secondList = ['Jordan', 'Force', 'Max', 'Dunk', 'Yard', 'Huarache', 'Yeezy', 'Trunner', 'Zoom', 'Elevation', 'Why Not?', 'Goldthwait', 'Shoe', 'Aura', 'Go', 'Pegasus', 'Infinity', 'Run', '', '', '', ''] ;
    firstModifierList = ['1', '90', '95', '97', 'High', 'Low', '2', 'Mid', 'Ultimate', 'Advance', '92', 'Renegade', 'Zer0.3', '270', 'Turbo', 'Run', 'Dunk', '36', '', '', '', '', ''];
    secondModifierList = ['Retro', 'SE', 'React', 'Flyknit', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

    first = firstList[Math.floor(Math.random() * firstList.length)];
    second = secondList[Math.floor(Math.random() * secondList.length)];
    firstModifier = firstModifierList[Math.floor(Math.random() * firstModifierList.length)];
    secondModifier = secondModifierList[Math.floor(Math.random() * secondModifierList.length)];

    name = `Nike ${first} ${second} ${firstModifier} ${secondModifier}`;
    return name;
  },

  getGender: () => {
    if (Math.random() <= .5) {
      return 'male';
    }
    return 'female';
  },

  getCategory: () => {
    const categories = ['Lifestyle', 'Running', 'Basketball', 'Training & Gym', 'Soccer', 'Skateboarding', 'Football', 'Baseball', 'Golf', 'Tennis', 'Track & Field', 'Walking', 'Volleyball'];
    return categories[Math.floor(Math.random() * categories.length)];
  },

  // I was unable to locate any shoes with options, these or otherwise.
  // Leaving as is for now
  getOptions: () => {
    let options = ['Member Select', 'Sustainable Material', ''];
    return options[Math.floor(Math.random() * options.length)];
  }
};
