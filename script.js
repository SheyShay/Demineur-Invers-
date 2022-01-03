let bomb = getRandomInt(1,17)
let lastId = 1;
let compteur = 0;

function getRandomInt(min, max){

    return Math.floor((max-min)*Math.random()+min);
}

console.log('The bomb is in card '+bomb);

function doClick(id) {
    console.log('clicked on # '+id);
    compteur = compteur + 1;
    document.getElementById("image"+lastId).src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNW2NxEQxAKkQGQ1BLLIlIURnQANj_jatR-w&usqp=CAU";
    lastId = id;
    let tries = document.querySelector('#tries');

    if(bomb == id){ //boom
        document.getElementById("image"+id).src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQY-9b4dZhIi_1qlSM4HLjy-55tXcDzgwblw&usqp=CAU";
     
    }else{ //fail
        document.getElementById("image"+id).src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSENC5PZ7tr5Awm7bpvCFSpVLHcd2A4nKtkUA&usqp=CAU"; 
    }
    
    tries.innerHTML ='Tentative n° ' + compteur;
}
