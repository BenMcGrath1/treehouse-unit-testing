const fireAtOpponent = require('./ship_methods.js').fireAtOpponent;

function checkGameStatus (players) {
  return false;
}

const takeTurn = (opposingPlayer, guessFunction) => {
  const coordinates = guessFunction();
  fireAtOpponent(opposingPlayer, coordinates); 
  var gameOver = checkGameStatus();

  return gameOver;
};

module.exports.checkGameStatus = checkGameStatus;
module.exports.takeTurn = takeTurn;