const team = {
    _players: [{firstName: 'Pablo',lastName: 'Sanchez',age: 11},
    {firstName: 'Devansh',lastName: 'Garg',age: 20},
    {firstName: 'Anmol',lastName: 'Walia',age: 19
  }],
    _games: [{opponent: 'Broncos',teamPoints: 42,
  opponentPoints: 27},
  {opponent: 'Manchester',teamPoints: 56,
  opponentPoints: 39},
  {opponent: 'Nadal',teamPoints: 35,
  opponentPoints: 37}],
  get players(){
    return this._players
  },
  get games(){
    return this._games
    },
  addPlayer(firstName,lastName,age){
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    this._players.push(player)
  },
  addGame(opponent,teamPoints,opponentPoints){
    let game = {
      opponent: opponent,
      teampoints: teamPoints,
      opponentPoints: opponentPoints
    }
    this._games.push(game) 
  }
  }
  team.addPlayer('Steph','Curry','28')
  team.addPlayer('Lisa','Leslie','44')
  team.addPlayer('Bugs','Bunny','76')
  console.log(team.players)
  team.addGame('Tom',52,67)
  team.addGame('Naruto',93,22)
  team.addGame('Zoro',35,10)
  console.log(team.games)