function personalDice(name, faces = 6) {
    ///outer function
    /*   name is the variable of the personalDice function.
    let name = firstArgument; */
    function roll() {
      counter++;
      const newRoll = Math.floor(Math.random() * faces) + 1;
      console.log(`for roll ${counter},${name} rolled a ${newRoll} `);
      /* 2a: here the closure uses the 'name' variable from personalDice(), the closure is used
        outer scope */
    }
    let counter = 0;
  
    return roll;
  }

  const userRoll = personalDice("username",6)