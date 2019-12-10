const expect = require('chai').expect; 

describe('checkForShip', () => {
  const checkForShip = require('../game_logic/ship_methods').checkForShip; 
  let player; 

  before(() => {
    player = {
      ships: [
        {
          locations: [ [0, 0], [0, 1] ]
        },
        {
          locations: [ [1, 0], [1, 1] ]
        },
        {
          locations: [ [2, 0], [2, 1], [2, 2], [2, 3] ]
        }
      ]
    }; 
  });

  it('should correctly report no ship at a given players coordinate', () => {
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  it('should correctly report a ship located at the given coordinates', () => {
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
  });

  it('should handle ships at more than one coordinate', () => {
    expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]); 
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  it('should handle checking multiple ships', () => {
    expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [1, 0])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player, [2, 3])).to.deep.equal(player.ships[2]);
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
});

describe('damageShip', () => {
  const damageShip = require('../game_logic/ship_methods').damageShip;

  it('should register damage on a given ship at a given location', () => {
    const ship = {
      locations: [[0, 0]], 
      damage: []
    };
    damageShip(ship, [0, 0]);
    expect(ship.damage).to.not.be.empty;
    expect(ship.damage[0]).to.deep.equal([0, 0]); 
  });
  
});

describe('fireAtOpponent', () => {
  const fireAtOpponent = require('../game_logic/ship_methods').fireAtOpponent; 
  let opponent; 

  beforeEach(() => {
    opponent = {
      ships: [
        {
          locations: [[0, 1], [0, 2], [0, 3]], 
          damage: []
        }, 
        {
          locations: [[5, 5], [5, 6]], 
          damage: []
        }
      ]
    };
  });

  after(() => {
    console.log('entire test suite completed'); 
  });

  afterEach(() => {
    console.log('test completed');
  }); 


  it('should NOT record damage if no ship is present', () => {
    fireAtOpponent(opponent, [9, 9]);
    expect(opponent.ships[0].damage).to.be.empty;
  }); 

  it('should register damage if a ship is present', () => {
    const targetShip = opponent.ships[1]; 

    fireAtOpponent(opponent, [5, 5]);
    expect(targetShip.damage).to.not.be.empty;
    expect(targetShip.damage[0]).to.deep.equal([5, 5]); 
  });
}); 