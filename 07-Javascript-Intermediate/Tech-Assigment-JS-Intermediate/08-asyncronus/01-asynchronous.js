// 1. Apa itu synchronous?
//    Synchronous adalah proses jalannya program secara berurutan, misal terdapat 3 function, function 3 baru 
//    dapat dieksekusi setelah function 1 dan 2 selesai 
//    
// 2. Apa itu asynchronous?
//    Asynchronous adalah proses jalannya program bisa dilakukan secara bersamaan tanpa harus menunggu proses 
//    antrian.

// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
//    Ya konsep asyncronus dapat diterapkan pada browser

// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
//    01- Pertama
//    Output :
//    first log:  1
//    first log:  2
//    first log:  3
//    first log:  4
//    first log:  5
//    second log:  6
//    second log:  6
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
//    karena setTimeOut akan melakukan pergantian/perpindahan jika waktu sudah melebihi 100 seconds, dan first log akan berpindah ke second log
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama

for (let i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => { 
        console.log("second log: ", i)}, 100); // 02 - Kedua
  }


  

  