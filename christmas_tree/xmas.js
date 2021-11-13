
function drawTree(h){
    let txt = '';
  for(let i=0;i<=h;i++){
    txt = "";
    for(let j=0;j<=h - i;j++){
      txt += " ";
    }
    for(let k=0;k<i;k++){
      txt += " *";
    }
    console.log(txt);
  }
  }
  drawTree(8)