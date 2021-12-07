function scramble(s) {
    return s.replace(/\b([a-z])([a-z]+)([a-z])\b/gi, function (t, a, b, c) {
      b = b.split(/\B/);
      for (
        var i = b.length, j, k;
        i;
        j = parseInt(Math.random() * i), k = b[--i], b[i] = b[j], b[j] = k
      ) {}
      return a + b.join("") + c;
    });
  }
  
  console.log(scramble("Fear is the mindkiller"));
  