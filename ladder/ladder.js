const ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
     console.log(`${this.step}`);;
      return this;
    }
  };


  ladder.up().up().down().up().down().showStep();

  /* we can chain call methods of an object