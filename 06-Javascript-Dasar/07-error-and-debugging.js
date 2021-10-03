/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error 
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/// - Type Error : TypeError terjadi akibat kesalahan saat nilai yang diinput tidak sesuai dengan tipe yang dimaksud
/// - Reference Error : ReferenceError terjadi ketika variabel yang belum dideklarasikan
/// - Range Error : RangeError terjadi saat nilai tidak dalam rentang nilai yang diset
/// - Syntax Error : SyntaxError terjadi saat kesalahan penggunaan/penulisan sintaks 

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

///Terjadi Reference Error
///Terjadi karena code dibaca dari atas kebawah, sehingga salaryWithVar dan salaryWithConst tidak terdeklarasi sehingga menimbulkan error
