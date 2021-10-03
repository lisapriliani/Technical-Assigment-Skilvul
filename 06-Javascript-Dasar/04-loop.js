/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (let angka = 2; angka <= 100; angka++) {
    let isPrime = true;

    for (let i = 2; i < angka; i++) {
        if (angka % i == 0) {
            isPrime = false;
        break;
        }
    }

    if (isPrime) {
        console.log(angka );
    }
}

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;
let angka = 2;

/// EDIT HERE
while (primeCounter < 50) {
    let isPrime = true;

    for (let i = 2; i < angka; i++) {
        if (angka % i == 0) {
            isPrime = false;
        break;
        }
}
if (isPrime) {
    fiftiethPrime = angka;
    primeCounter++;
}
angka++
}
console.log(fiftiethPrime)
    



/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

/// EDIT HERE
angka= 0;
do {
    if(angka % 2 != 0){
        fiftiethOdd = angka;
        oddCounter++;
    }
    angka++;
} while (oddCounter < 50);


console.log("fiftiethOdd is " + fiftiethOdd);

