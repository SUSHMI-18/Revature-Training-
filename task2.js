function printPrimeNumbers(n) {
    for (let number = 2; number <= n; number++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(number);
        }
    }
}
printPrimeNumbers(20);
