/* 
code from: https://avelican.github.io/bonsai/

inspired by https://p.teknik.io/Raw/EWWzQ
and https://www.reddit.com/r/unixporn/comments/amdt7m/2bwm_cat/
*/

var output = document.getElementById("bonsai-output");

var rows=20
var cols=15
var grid

var branches = 0
var max_branches = 1024

var t = 50

function init() {
grid=[]
for(var row = 0; row < rows; row++) {
  grid.push([])
  for(var col = 0; col < cols; col++) {
    grid[row].push(" ")
  }
}

}

function show(){

	var str = getString()


	output.innerHTML = str

}

function getString(){
  str = ""
  for(var row = 0; row < rows - 3; row++) {
    // if (allEqual(grid[row])) continue;
    str += grid[row].join("") +"\n";
  }
  return str
}

function bonsai(){
init()
grow()
//show()
}

bonsai()

function grow() {
	var start = int(cols / 2) + rand(-1*cols/3, 2*cols / 3)
    start = rand(0, cols);
	
	var x = start;
	var y = rows - 3;
  var life = 32
  //branch(x,y,life)
  window.setTimeout(function(){step(x,y,life)},10);
  //grid[y][x] = "|"
}


function nextTimeT(){
  t += 2;
  return t;
}

function nextTime(){
  return 1+Math.floor(nextTimeT()/5)
}



function step(x,y,life){
  if(life<1){
    return
  }

    var dy = (rand(0,10) > 3) ? -1 : 0 
    var dx = rand(-2,2)
    
    if(branches < max_branches){
      //if(rand(0,10)<2) { branch(x,y,life) }
      //if(rand(0,20) + life < 15) { branch(x,y,life) }
      if(life%13==0 || rand(0,40)<2 || life < 5){
      
      //var f= life*life * rand(0,10)
      //if(f < 500 || life < 2){
      
      //if(life%15==0){
        branches++
        window.setTimeout(function(){step(x,y,life-1)},t+rand(1,11))
        //step(x,y,life-1)
        
      }
    }

    x += dx
    y += dy

    var char = (dx > 0) ?  "/" : "\\"
    if (dx == 0) { char = "|" }
    if (dy == 0) { char = "~" }
    if (life==1) { char = "&"}

    if(x<0||x>rows-1||y<0){return}
    grid[y][x] = char
    show()
    if(life>0){
      
      window.setTimeout(function(){step(x,y,life-1)},t+rand(1,11))
      //step(x,y,life-1)
    }
}

function rand(min,max){
	return int(min + Math.random() * (Math.abs(min)+max))
}

function int(float){
	return Math.round(float) // yea i know
}
