/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
    console.log("ada 2 : Global Scope dan Local Scope")
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
    console.log("Global Scope : dapat diakses dimanapun, dan nilainya dapat diganti di dalam fungsi")
    console.log("Local Scope : hanya dapat diakses didalam fungsi ditempatnya saja")
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript
    ///Global Scope
    let myName = "Lisa"
    function perkenalan(){
        return myName;
    }
    console.log(myName)


    ///Local Scope
    function lokal(a){
         let a = "haiiii"
         return a
    }
/// WRITE YOUR ANALYSIS HERE

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
    
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?
    
/// WRITE YOUR ANALYSIS HERE
    console.log("output yang tampil adalah Mariah karena fungsi printFirstName dipanggil diluar blok, 
    dan saat pemanggilan fungsi sudah diberi nilai berupa variabel lokal")



const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
