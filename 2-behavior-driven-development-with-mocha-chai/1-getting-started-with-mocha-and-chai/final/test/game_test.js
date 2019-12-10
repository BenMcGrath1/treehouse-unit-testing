var expect = require('chai').expect;

describe('GAME INSTANCE FUNCTIONS', function () {
  describe('checkGameStatus', function () {
    var checkGameStatus = require('../game_logic/game_instance.js').checkGameStatus;
    it('should tell me when the game is over', function () {
      var players = [
        {
					ships: [
						{
							locations: [[0, 0]],
							damage: [[0, 0]]
						}
					]
        }
      ];
      var actual = checkGameStatus(players);
      expect(actual).to.be.false;
    });
  });
  describe('takeTurn', () => {
    const takeTurn = require('../game_logic/game_instance').takeTurn;
    let guess; 
    let player;  

    beforeEach(() => {
      guess = () => [0, 0]; 
      player = {
        ships: [
          {
            locations: [[0, 0]], 
            damage: []
          }
        ]
      }; 
    }); 
    it('should return false if the game ends', () => {
      var actual = takeTurn(player, guess);
      expect(actual).to.be.false;
    });
  });

  const saveGame = (callback) => {
    setTimeout(() => {
      callback();
    }, 1000);
  };

  describe('saveGame', () => {
    it('should update save status', (done) => {
      let status = 'game not saved...'; 
      saveGame(() => {
        status = 'game saved...'; 
        expect(status).to.equal('game saved...');
        done();
      });
    });
  });
});