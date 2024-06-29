let userinput=prompt("Enter S/W/G for snake, water & gun respectively")
let c=Math.floor(Math.random()*3);
let comp=["S","W","G"][c];
document.write(`User enter : ${userinput} <br> Computer value : ${comp} <br>`)

const SWG=(a ,b )=>{
    if(a===b) return "Toss"
    else if((a==="G" && b==="S")||(a==="S" && b==="W")||(a==="W"&& b==="G"))
       return  "You won.";
    else{
        return "Oh no! you lose."
    }
}
document.write(SWG(userinput,comp));
   