function displayFactor(number){

if(number%3==0 && number%5==0 && number%7==0){
    console.log("PlingPlangPlong");
}
else if (number%3==0 && number%5==0){
    console.log("PlingPlang");
}
else if (number%3==0 && number%7==0){
    console.log("PlingPlong");
}
else if ( number%5==0 && number%7==0){
    console.log("PlangPlong"); 
}
else if(number%3==0){
    console.log("Pling");
}
else if (number%5==0){
    console.log("Plang"); 
}
else if (number%7==0){
    console.log("Plong"); 
}
else{
    console.log(number);
}
}

displayFactor(15);
displayFactor(56);
displayFactor(55);
displayFactor(14);
displayFactor(2);