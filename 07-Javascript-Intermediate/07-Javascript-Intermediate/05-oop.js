//---------------Nomor 1--------------------------

// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
//    Output :
//    fun1 { fun1: [Function: fun1], fun2: [Function: fun2] }
//    fun2 {}
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
//    Tidak

// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
//    Karena pada fun2, fungsi atau method tidak dideklarasikan dengan benar, sehingga yang keluar hanyalah {}

const obj = {
  fun1: function () {
    console.log("fun1", this);
  },
  fun2: () => {
    console.log("fun2", this);
  },
};

obj.fun1();
obj.fun2();

//---------------Nomor 2--------------------------

// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
//Encapsulation merupakan Encapsulation adalah cara untuk membatasi akses langsung ke properti atau method dari sebuah objek.
//Encapsulation dibuthkan karena terdapat property yang tidak boleh diakses diluar kelasnya dan akan menimbulkan masalah apabila tidak dibatasi pengaksesan nya.
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
// Abstraction adalah sebuah teknik/cara untuk menyembunyikan detail tertentu dari sebuah objek/method dan hanya menampilkan fungsionalitas atau fitur penting dari objek tersebut.
// Abstraction dibutuhkan untuk membuat baris program lebih rapih dan mempermudah penggunaan kode
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
//  Inheritance adalah sebuah proses dimana sebuah class mewariskan property dan methodnya ke class lain atau childnya.
//  Inheritance dibutuhkan dalam sebuah program untuk mengambil property atau method yang sama dan dapat dipakai berulang-ulang
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
//  Polymorphism dalam OOP adalah sebuah prinsip di mana class dapat memiliki banyak bentuk method yang berbeda-beda meskipun namanya sama.
//  Polymorphism dibutuhkan untuk

//---------------Nomor 3--------------------------

class Phone {
  constructor(brand, storage, ram) {
    this.brand = brand;
    this.storage = storage;
    this.ram = ram;
  }
  getBrandName() {
    return this.brand;
  }
  setBrandName(brand) {
    return this.brand;
  }
  printSpecification() {
    console.log(`Ponsel ini memiliki storage : ${this.storage} dan ram: ${this.ram}`);
  }
  setSpecification(storage, ram) {
    this.storage = storage;
    this.ram = ram;
  }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co");
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();

//---------------Nomor 4--------------------------

class Student {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.courseOfferings = [];
  }

  takeNewCourse(course) {
    if (this.courseOfferings.length === 0) {
      const courseOffering = new CourseOffering(course);
      this.courseOfferings = [courseOffering];
      course.decreaseQuota();
    } else {
      const isAlreadyExist = this.courseOfferings.find((courseOffering) => courseOffering.course.getSubject() === course.getSubject());

      if (isAlreadyExist === undefined) {
        const courseOffering = new CourseOffering(course);
        this.courseOfferings = [...this.courseOfferings, courseOffering];
        course.decreaseQuota();
      }
    }
  }

  takeATest(course) {
    const idx = this.courseOfferings.findIndex((courseOffering) => courseOffering.course.getSubject() === course.getSubject());
    if (this.courseOfferings[idx].attendance >= course.getAttendance()) {
      this.courseOfferings[idx].grade = Math.floor(Math.random() * 100);
    } else {
      console.log(`please fill your absen ${course.getSubject()}`);
    }
  }

  courseAttendance(course) {
    const idx = this.courseOfferings.findIndex((courseOffering) => courseOffering.course.getSubject() === course.getSubject());
    this.courseOfferings[idx].attendance += 1;
  }
}

class CourseOffering {
  constructor(course) {
    this.course = course;
    this.attendance = 0;
    this.grade = 0;
  }
}

class Course {
  constructor(subject, quota, attendance) {
    this.subject = subject;
    this.quota = quota;
    this.attendance = attendance;
  }

  getSubject() {
    return this.subject;
  }

  getAttendance() {
    return this.attendance;
  }

  decreaseQuota() {
    this.quota -= 1;
  }
}

const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);

const johnWatson = new Student("john watson", "male");

johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.takeATest(biology);
johnWatson.takeATest(physics);

console.log(johnWatson.courseOfferings);
