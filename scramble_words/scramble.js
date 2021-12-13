/// Fisher Yates Randomize Array Algorithm to use in scramble function
function randomize(arr) {

  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); //random index
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
  }
  return arr
}

let str = "I found the Fisher Yates Algorithm and used it"


//// The scrambler:
function scrambleWords(string) {
  let punct = ""
  if (".!?".includes(string.substr(-1))) {
    punct = string.substr(-1)
    string = string.substring(0, str.length - 1);

  }

  const wordsArray = string.split(' ')
  const scramble = wordsArray.map((word) => {
    let letters = [...word]
    const first = letters.splice(0, 1)
    const last = letters.splice(-1)
    const center = randomize(letters)
    center.unshift(first)
    center.push(last)
    return center.join('')


  })
  return scramble.join(' ') + punct
}

console.log(scrambleWords(str));
///I fnuod the Fesihr Yetas Argihlotm and uesd it

