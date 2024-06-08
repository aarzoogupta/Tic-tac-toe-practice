let array = [];
let curr;
let turn = 'x';
let grid = [['-1','-1','-1'],['-1','-1','-1'],['-1','-1','-1']];

function a(id){
    if(array.find(ele => ele === id) === undefined){
    let html = "<img class = 'img' src = 'zero2.png'>";
    if(turn !=='0'){
        html = "<img class = 'img' src = 'Kaata2.png'>";
        id.innerHTML = html;
        turn = '0';
    }
    else{
    id.innerHTML = html;
    turn = 'X';}
    curr = id;}
    let str = id.id ;
    console.log(Math.ceil(str[1]/3)-1);
    console.log((str[1]%3 == 0)?2:(str[1]%3)-1);
    grid[Math.ceil(str[1]/3)-1][(str[1]%3 == 0)?2:(str[1]%3)-1] = (turn==='X')?'0':'X';
    array.push(curr);
    console.log(array);
    let cont = turn + "'s Turn";
    document.getElementById("text").innerHTML = cont;
    let flag = 0;
    for(let i = 0; i < 3; i++) {
        if(grid[i][0] !== '-1' && grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]) {
            cont = grid[i][0] + " WINS!!!!!!!!!!!!!!!!!!";
            document.getElementById("text").innerHTML = cont;
            flag = 1;
        }
        if(grid[0][i] !== '-1' && grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i]) {
            cont = grid[0][i] + " WINS!!!!!!!!!!!!!!!!!!";
            document.getElementById("text").innerHTML = cont;
            flag = 1;
        }
        if(grid[i][0] == -1 || grid[i][1] == -1 || grid[i][2] == -1)flag = 1;
        if(grid[0][i] == -1 || grid[1][i] == -1 || grid[2][i] == -1 )flag = 1;

    }

    if(grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2] && grid[0][0] != '-1') {
        cont = grid[0][0] + " WINS!!!!!!!!!!!!!!!!!!";
            document.getElementById("text").innerHTML = cont;
    }
    else if(grid[0][2] === grid[1][1] && grid[2][0] === grid[1][1] && grid[0][2] != '-1') {
        cont = grid[2][0] + " WINS!!!!!!!!!!!!!!!!!!";
            document.getElementById("text").innerHTML = cont;
    } 
    else if(flag === 0){
        cont = "IT'S A DRAW. RESTART!!!!!" ;
        document.getElementById("text").innerHTML = cont;
    } 
}

function reset() {
    array = [];
    let ele = document.getElementsByClassName("but");
    console.log(ele);
    Array.from(ele).forEach((el) => el.innerHTML = "");
    turn = 'X';
    let cont = turn + "'s Turn";
    document.getElementById("text").innerHTML = cont;
    grid = [['-1','-1','-1'],['-1','-1','-1'],['-1','-1','-1']];

}