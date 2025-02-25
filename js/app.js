
// CREAZIONE CICLO CHE STAMPI NUMERI DA 1 A 100
for(let number = 1; number <= 100; number++){

    // creo una serie di condinzioni in modo da stampare i diversi multipli
    // dichiaro subito la condizione FizzBuzz perchè sennò non arriverà mai questa condizione
    // avendo prima multipli 3 e 5 uscirà dal blocco non arrivando mai a fizzbuzz
    if(number % 3 === 0 && number % 5 === 0){
        console.log("FizzBuzz")
    }else if(number % 3 === 0){
        console.log("Fizz")
    }else if(number % 5 === 0){
        console.log("Buzz")
    }else{
        console.log(number)
    }
}


