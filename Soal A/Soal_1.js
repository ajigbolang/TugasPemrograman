/**
* Soal 1: Manipulasi Data Siswa
* Diberikan data awal:
*/
// Tugas:
// a. Buat sebuah object bernama `siswa` yang berisi data di atas.
// Tambahkan juga properti 'jurusan' dengan nilai "RPL" (Rekayasa Perangkat Lunak)ke dalam object `siswa`.
// b. Tambahkan nilai baru (85) ke dalam array `nilai` di dalam object `siswa`.
// c. Hitung rata-rata dari semua nilai yang ada di dalam array `nilai` pada object`siswa`.
// d. Tampilkan (misalnya menggunakan console.log) sebuah string dengan format:
// "[Nama Siswa] ([Umur] tahun) - [Jurusan], Nilai rata-rata: [Rata-rata Nilai]"
// Contoh output yang diharapkan (berdasarkan data awal + nilai baru 85):
// "Budi Santoso (17 tahun) - RPL, Nilai rata-rata: 82.5"

// Kode anda di sini :

const nama = "Budi Santoso";
const umur = 17;
const nilai = [80, 75, 90]; // Array nilai awal

// a. Membuat object siswa
const siswa = {
  nama: nama,
  umur: umur,
  nilai: nilai,
  jurusan: "RPL (Rekayasa Perangkat Lunak)",
};

// b. Tambahkan nilai baru
siswa.nilai.push(85);

// c. Hitung rata-rata nilai
let totalNilai = 0;
for (let i = 0; i < siswa.nilai.length; i++) {
  totalNilai += siswa.nilai[i];
}
let rataRata = totalNilai / siswa.nilai.length;

// d. Tampilkan hasil
console.log(`${siswa.nama} (${siswa.umur} tahun) - ${siswa.jurusan}, Nilai rata-rata: ${rataRata}`);
