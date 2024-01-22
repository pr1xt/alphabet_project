const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const vowels = ['A', 'E', 'I', 'O', 'U'];
const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
const sett_lst = document.getElementById("lst_use")
const sett_attemps = document.getElementById("attemps")

let attemps = 5;
let attemp = 1;
let symb_lst = alphabet.slice(0);
let symbol = ran_symbol(symb_lst);
let used = [];


document.addEventListener('keydown', function(event) {
    let bttn = event.key.toUpperCase();
    text_lst = symb_lst.join("");
      if (text_lst.includes(bttn)) {
        quess(bttn);    
      }
    });

function ran_symbol(arr){
    el = arr[(Math.floor(Math.random() * arr.length))];
    console.log(el);
    return el
};
function res(){
    location.reload();
}
function sett(){
    document.getElementById("sett_pole").style.display = "inline"
    document.getElementById("sett_block").style.display = "inline"
}
function sett_close(){
    document.getElementById("sett_pole").style.display = "none"
    document.getElementById("sett_block").style.display = "none"
}
function change_lst(){
    if (symb_lst[1] =="B"){
        symb_lst = vowels.slice(0)
        sett_lst.innerHTML = "vowels" 
        symbol = ran_symbol(symb_lst);
    }else if (symb_lst[1] =="E"){
        symb_lst = consonants.slice(0)
        sett_lst.innerHTML = "consonants" 
        symbol = ran_symbol(symb_lst);
    }else{
        symb_lst = alphabet.slice(0)
        sett_lst.innerHTML = "alphabet" 
        symbol = ran_symbol(symb_lst);
    }
}
function change_att(){
    if (attemps == 5){
        attemps = 4
        sett_attemps.innerHTML = "4" 
        document.getElementById("block5").style.display = "none"
    }else if (attemps == 4){
        attemps = 3
        sett_attemps.innerHTML = "3"
        document.getElementById("block4").style.display = "none"
    }else{
        attemps = 5
        sett_attemps.innerHTML = "5"
        document.getElementById("block5").style.display = "inline"
        document.getElementById("block4").style.display = "inline"
    }
}
function quess(txt){
    if(attemps == 5){
        if ((txt != symbol )&& !(used.join("").includes(txt))){
            if (attemp == 1){
                document.getElementById("block1").style.background = "#411111";
                document.getElementById("T1").innerHTML = `NOT <br> ${txt}`;
                attemp += 1;
                used.push(txt);
            }
            else if (attemp == 2){
                document.getElementById("block2").style.background = "#411111";
                document.getElementById("T2").innerHTML = `NOT <br> ${txt}`;
                attemp += 1;
                used.push(txt);
            }
            else if (attemp == 3){
                document.getElementById("block3").style.background = "#411111";
                document.getElementById("T3").innerHTML = `NOT <br> ${txt}`;
                attemp += 1;
                used.push(txt);
            }
            else if (attemp == 4){
                document.getElementById("block4").style.background = "#411111";
                document.getElementById("T4").innerHTML = `NOT <br> ${txt}`;
                attemp += 1;
                used.push(txt);
            }
            else if (attemp == 5){
                document.getElementById("block5").style.background = "#411111";
                document.getElementById("T5").innerHTML = `NOT <br> ${txt}`;
                attemp = 6;
                used.push(txt);
                document.getElementById("loose").style.display = "inline";  
            }
        }
        else if(txt == symbol){
            if (attemp == 1){
                document.getElementById("block1").style.background = "#44a81fcb";
                document.getElementById("T1").innerHTML = `IS <br> ${txt}`;
                used.push(txt);
            }
            else if (attemp == 2){
                document.getElementById("block2").style.background = "#44a81fcb";
                document.getElementById("T2").innerHTML = `IS <br> ${txt}`;
                used.push(txt);
            }
            else if (attemp == 3){
                document.getElementById("block3").style.background = "#44a81fcb";
                document.getElementById("T3").innerHTML = `IS <br> ${txt}`;
                used.push(txt);
            }
            else if (attemp == 4){
                document.getElementById("block4").style.background = "#44a81fcb";
                document.getElementById("T4").innerHTML = `IS <br> ${txt}`;
                used.push(txt);
            }
            else if (attemp == 5){
                document.getElementById("block5").style.background = "#44a81fcb";
                document.getElementById("T5").innerHTML = `IS <br> ${txt}`;
                used.push(txt);
            }
            attemp = 6;
        }
    }else if (attemps == 4){
    
        if ((txt != symbol )&& !(used.join("").includes(txt))){
            if (attemp == 1){
                document.getElementById("block1").style.background = "#411111";
                document.getElementById("T1").innerHTML = `NOT <br> ${txt}`;
                attemp += 1;
                used.push(txt);
            }
            else if (attemp == 2){
                document.getElementById("block2").style.background = "#411111";
                document.getElementById("T2").innerHTML = `NOT <br> ${txt}`;
                attemp += 1;
                used.push(txt);
            }
            else if (attemp == 3){
                document.getElementById("block3").style.background = "#411111";
                document.getElementById("T3").innerHTML = `NOT <br> ${txt}`;
                attemp += 1;
                used.push(txt);
            }
            else if (attemp == 4){
                document.getElementById("block4").style.background = "#411111";
                document.getElementById("T4").innerHTML = `NOT <br> ${txt}`;
                attemp = 6;
                used.push(txt);
                document.getElementById("loose").style.display = "inline";
            }
        }
        else if(txt == symbol){
            if (attemp == 1){
                document.getElementById("block1").style.background = "#44a81fcb";
                document.getElementById("T1").innerHTML = `IS <br> ${txt}`;
                used.push(txt);
            }
            else if (attemp == 2){
                document.getElementById("block2").style.background = "#44a81fcb";
                document.getElementById("T2").innerHTML = `IS <br> ${txt}`;
                used.push(txt);
            }
            else if (attemp == 3){
                document.getElementById("block3").style.background = "#44a81fcb";
                document.getElementById("T3").innerHTML = `IS <br> ${txt}`;
                used.push(txt);
            }
            else if (attemp == 4){
                document.getElementById("block4").style.background = "#44a81fcb";
                document.getElementById("T4").innerHTML = `IS <br> ${txt}`;
                used.push(txt);
                
            }
            attemp = 6;
        }
    }else{

        if ((txt != symbol )&& !(used.join("").includes(txt))){
            if (attemp == 1){
                document.getElementById("block1").style.background = "#411111";
                document.getElementById("T1").innerHTML = `NOT <br> ${txt}`;
                attemp += 1;
                used.push(txt);
            }
            else if (attemp == 2){
                document.getElementById("block2").style.background = "#411111";
                document.getElementById("T2").innerHTML = `NOT <br> ${txt}`;
                attemp += 1;
                used.push(txt);
            }
            else if (attemp == 3){
                document.getElementById("block3").style.background = "#411111";
                document.getElementById("T3").innerHTML = `NOT <br> ${txt}`;
                attemp = 6;
                used.push(txt);
                document.getElementById("loose").style.display = "inline";
            }
        }
        else if(txt == symbol){
            if (attemp == 1){
                document.getElementById("block1").style.background = "#44a81fcb";
                document.getElementById("T1").innerHTML = `IS <br> ${txt}`;
                used.push(txt);
            }
            else if (attemp == 2){
                document.getElementById("block2").style.background = "#44a81fcb";
                document.getElementById("T2").innerHTML = `IS <br> ${txt}`;
                used.push(txt);
            }
            else if (attemp == 3){
                document.getElementById("block3").style.background = "#44a81fcb";
                document.getElementById("T3").innerHTML = `IS <br> ${txt}`;
                used.push(txt);
            }
            attemp = 6;
        }
    }
}