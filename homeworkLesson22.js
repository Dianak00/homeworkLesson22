//Exercise 1
let temperature = -2;
if (temperature < 0) {
    console.log("Inghet");
}
else if ( temperature < 10 && temperature > 0 ) {
    console.log('Frig');
}
else if (temperature > 11 && temperature < 25) {
    console.log ('Moderat');
}
else if (temperature > 25) {
    console.log("Cald");
}

//Exercise 2
let day = 3;
if (day == 1){
    console.log(`Azi e luni`);
}
else if (day == 2){
    console.log(`Azi e marti`);
}
else if (day == 3){
    console.log(`Azi e miercuri`);
}
else if (day == 4){
    console.log(`Azi e joi`);
}
else if (day == 5){
    console.log(`Azi e vineri`);
}
else if (day == 6){
    console.log(`Azi e sambata`);
}
else if (day == 7){
    console.log(`Azi e duminica`);
}

//Exercise 3
let number = 225;
if ( number % 2 == 0){
    console.log(`Este un numar par`);
}
else if ( number % 2 != 0) {
    console.log (`Este un numar impar`);
}

//Exercise 4
let purchaseAmount = 100;
if (purchaseAmount >= 100) {
    console.log((purchaseAmount-(purchaseAmount*10/100))+(purchaseAmount*5/100));
} 
else if (purchaseAmount < 100) {
    console.log(purchaseAmount+(purchaseAmount*5/100));
}

//Exercise 5
/*
function verifyPassword (password) {
    const hasUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"].test(password);
    const hasLowerCase = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'].test(password);
    const hasNumbers = ['0','1','2','3','4','5','6','7','8','9'].test(password);
    const lenght = password.lenght;

    if (lenght > 12 && hasUpperCase && hasLowerCase && hasNumbers) {
        console.log(`Parola foarte sigura`);
    }
    else if (lenght > 8 && hasUpperCase && hasLowerCase) {
        console.log (`Parola sigura`);
    }
    else if (lenght > 6 ) {
        console.log(`Parola slaba`);
    }
    else if (lenght < 6) {
        console.log(`Parola nu este sigura`);
    }
}
console.log(verifyPassword("hfbfnsnf"));*/
let password = 'dhbfrjfr';
if (password.lenght > 12 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password)) {
    console.log(`Parola foarte sigura`);
} else if (password.length > 8 && /[a-z]/.test(password) && /[A-Z]/.test(password)) {
    console.log(`Parola sigura`);
}

//Exercise 6
function isPrime (number) {
    if (number <=1) {
        return false;
    }
    for (let i=2; i <=Math.sqrt(number); i++) {
        if (number % i ===0) {
            return false;
        }
    }
    return true;
}
let num = 115;
if (isPrime(num)) {
    console.log(`${num} is a prime number`);
} else {
    console.log(`${num} is not a prime number`);
}


//Exercise 7
let a = 5;
let b = 6;
let c = 5;
if ( a+b>c && a+c>b && b+c>a ) {
    console.log(`Aceste 3 numere pot forma un triunghi`);
} else if ( a+b<=c || a+c<=b || c+b<=a) {
    console.log(`Aceste numere NU POT forma un triunghi`);
}


