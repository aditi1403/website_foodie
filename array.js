let array = [[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ];



function insert (){
    document.getElementById("demo").innerHTML = "";

    var i = prompt("Please enter row no. less than 5");
    var j = prompt("Please enter column no. less than 5");
    var val = prompt("Please enter value no.");
    

    array[i][j] = val;
    if (val != null) {


        for(let a=0; a<5; a++){
            for(let b=0; b<5; b++){
                document.getElementById("demo").innerHTML += array[a][b] + " ";
            }
            document.getElementById("demo").innerHTML += "<br>";
        }
    }

}

function remove (){
    document.getElementById("demo").innerHTML = "";

    var p = prompt("Please enter row no. less than 5");
    var q = prompt("Please enter column no. less than 5");
    //var val = prompt("Please enter value no.");
    

    array[p][q] = 0;
    for(let a=0; a<5; a++){
        for(let b=0; b<5; b++){
            document.getElementById("demo").innerHTML += array[a][b] + " ";
        }
        document.getElementById("demo").innerHTML += "<br>";
    }

}
