function printEvenNumbers(limit) {
    for (let i = 2; i <= limit; i += 2) {
        console.log(i);
    }
}
printEvenNumbers(20);



//using do while loop
function printEvenNumbers(limit) {
    let number = 2; 
    
    do {
        console.log(number);
        number += 2; 
    } while (number <= limit);
}
printEvenNumbers(20);

