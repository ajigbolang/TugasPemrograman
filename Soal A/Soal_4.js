/**
* Soal 4: Sistem Penilaian Siswa (Lanjutan)
* Buatlah sebuah constructor function atau class bernama `Siswa` yang memiliki:
* - Properti: `nama` (string), `nilai` (array of numbers, inisialisasi sebagai array kosong).
* - Method:
* - `tambahNilai(nilaiBaru)`: Menambahkan `nilaiBaru` (number) ke dalam array `nilai`.
* - `hitungRataRata()`: Menghitung dan me-return nilai rata-rata dari array `nilai`.
* Jika belum ada nilai, return 0.
* - `dapatPredikat()`: Me-return predikat berdasarkan nilai rata-rata:
* - "A" jika rata-rata >= 85
* - "B" jika rata-rata >= 70 dan < 85
* - "C" jika rata-rata >= 55 dan < 70
* - "D" jika rata-rata < 55
* Contoh Penggunaan:
* const siswaBaru = new Siswa("Ani");
* siswaBaru.tambahNilai(80);
* siswaBaru.tambahNilai(90);
* console.log(siswaBaru.hitungRataRata()); // Output: 85
* console.log(siswaBaru.dapatPredikat()); // Output: "A"
*/

// Kode Anda di sini

// Class Siswa
class Siswa {
  constructor(nama) {
    this.nama = nama;
    this.nilai = [];
  }

  // Method untuk menambah nilai
  tambahNilai(nilaiBaru) {
    this.nilai.push(nilaiBaru);
  }

  // Method untuk menghitung rata-rata
  hitungRataRata() {
    if (this.nilai.length === 0) return 0;

    let total = 0;
    for (let i = 0; i < this.nilai.length; i++) {
      total += this.nilai[i];
    }

    return total / this.nilai.length;
  }

  // Method untuk menentukan predikat berdasarkan rata-rata
  Predikat() {
    const rataRata = this.hitungRataRata();

    if (rataRata >= 85) return "A";
    else if (rataRata >= 70) return "B";
    else if (rataRata >= 55) return "C";
    else return "D";
  }
}

// Contoh penggunaan:
const siswaBaru = new Siswa("Ani");
siswaBaru.tambahNilai(80);
siswaBaru.tambahNilai(90);

console.log("Nama Siswa:", siswaBaru.nama);
console.log("Nilai:", siswaBaru.nilai);
console.log("Rata-rata:", siswaBaru.hitungRataRata());
console.log("Predikat:", siswaBaru.Predikat());
