function checkmarcopolo(number){
    if(number%3==0&&number%5==0)
    {
        console.log("Marco Polo");
    }   
    else if(number%5==0){
        console.log("Polo");
    }
    else if(number%3==0){
        console.log("Marco");
    }
    else{
        console.log('Nothing happpens')
    }
}
let number = prompt('Enter a number ');
checkmarcopolo(number);
