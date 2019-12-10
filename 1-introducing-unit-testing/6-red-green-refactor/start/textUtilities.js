const expect = require('chai').expect; 

expect(true).to.be.true;

const titleCase = (title) => {
  const words = title.split(' ');
  var titleCasedWords = words.map(word => {
    return word[0].toUpperCase() + word.substring(1);
  }); 

  return titleCasedWords.join(' '); 
};

expect(titleCase('gone with the wind')).to.be.a('string');
expect(titleCase('a')).to.equal('A');
expect(titleCase('jaws')).to.equal('Jaws');
expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective'); 