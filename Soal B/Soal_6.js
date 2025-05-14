/**
* Soal 6: Operasi pada Data Siswa
* Diberikan array data siswa sebagai berikut:
*/
// const dataSiswa = [
// { nis: "001", nama: "Andi Permana", nilai: 85 },
// { nis: "002", nama: "Budi Hartono", nilai: 72 },
// { nis: "003", nama: "Citra Lestari", nilai: 90 },
// { nis: "004", nama: "Dewi Anggraini", nilai: 72 },
// { nis: "005", nama: "Eka Wijaya", nilai: 88 }
// ];
/**
* Buatlah fungsi-fungsi berikut:
* a. `cariSiswaByNis(arrSiswa, nisCari)`:
* - Menerima array `arrSiswa` dan `nisCari` (string).
* - Me-return object siswa yang memiliki NIS sesuai `nisCari`.
* - Jika tidak ditemukan, me-return `null`.
*
* b. `cariSiswaNilaiTertinggi(arrSiswa)`:
* - Menerima array `arrSiswa`.
* - Me-return object siswa yang memiliki nilai tertinggi.
* - Jika ada lebih dari satu siswa dengan nilai tertinggi yang sama, return salah
satunya saja.
*
* c. `urutkanSiswaByNilaiDesc(arrSiswa)`:
* - Menerima array `arrSiswa`.
* - Me-return array baru berisi siswa yang sudah diurutkan berdasarkan `nilai` secara
descending (dari tertinggi ke terendah).
* - Array asli tidak boleh berubah.
*/

// Kode Anda di sini

// Data siswa
const dataSiswa = [
  { nis: "001", nama: "Andi Permana", nilai: 85 },
  { nis: "002", nama: "Budi Hartono", nilai: 72 },
  { nis: "003", nama: "Citra Lestari", nilai: 90 },
  { nis: "004", nama: "Dewi Anggraini", nilai: 72 },
  { nis: "005", nama: "Eka Wijaya", nilai: 88 }
];

/* 
FUNGSI A:
Mencari siswa berdasarkan NIS
*/
function cariSiswaByNis(arrSiswa, nisCari) {
  // untuk cek satu per satu data siswa
  for (let i = 0; i < arrSiswa.length; i++) {
    if (arrSiswa[i].nis === nisCari) {
      return arrSiswa[i]; // kalau ketemu, langsung dikembalikan
    }
  }
  return null; // kalau tidak ketemu
}

/* 
FUNGSI B:
Mencari siswa dengan nilai tertinggi
*/
function cariSiswaNilaiTertinggi(arrSiswa) {
  // untuk menganggap siswa pertama adalah yang tertinggi sementara
  let siswaTertinggi = arrSiswa[0];

  // untuk membandingkan dengan yang lain
  for (let i = 1; i < arrSiswa.length; i++) {
    if (arrSiswa[i].nilai > siswaTertinggi.nilai) {
      siswaTertinggi = arrSiswa[i]; // ganti jika ketemu yang lebih tinggi
    }
  }

  return siswaTertinggi;
}

/*
FUNGSI C:
Mengurutkan siswa berdasarkan nilai dari tinggi ke rendah (descending)
*/
function urutkanSiswaByNilaiDesc(arrSiswa) {
  // agar array asli tidak berubah
  let arrBaru = [...arrSiswa];

  // untuk mengurutkan dengan .sort(), besar ke kecil
  arrBaru.sort(function(a, b) {
    return b.nilai - a.nilai;
  });

  return arrBaru;
}

console.log(cariSiswaByNis(dataSiswa, "003"));
console.log(cariSiswaNilaiTertinggi(dataSiswa));
console.log(urutkanSiswaByNilaiDesc(dataSiswa)); // Array siswa dari nilai tertinggi ke terendah



