let str ="abcba";

let rev_str = "";

let num = 13;
let count =0;
for (let x = 0 ; x <= 13 ; x++){
    if(num%x==0){
        count++;
    }
}
if(count==2){
    console.log("prime")
}else{
    console.log("not prime")
}