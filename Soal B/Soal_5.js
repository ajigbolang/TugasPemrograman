/**
* Soal 5: Konversi Detik ke Format Jam:Menit:Detik
* Buatlah fungsi bernama `konversiDetikKeFormatWaktu` yang menerima satu parameter:
* - `totalDetik` (number): Jumlah total detik.
*
* Fungsi ini harus mengkonversi total detik ke format string "JJ:MM:DD" (Jam:Menit:Detik).
* Pastikan angka jam, menit, dan detik selalu terdiri dari dua digit (misalnya, 01 bukan 1).
* Contoh:
* - konversiDetikKeFormatWaktu(3661) akan me-return "01:01:01"
* - konversiDetikKeFormatWaktu(120) akan me-return "00:02:00"
* - konversiDetikKeFormatWaktu(59) akan me-return "00:00:59"
* - konversiDetikKeFormatWaktu(86400) akan me-return "24:00:00" (opsional: atau "00:00:00" hari berikutnya, jelaskan asumsi Anda)
*/

function konversiDetikKeFormatWaktu(totalDetik) {
  // Langkah 1: Hitung jam
  let jam = Math.floor(totalDetik / 3600); // 1 jam = 3600 detik

  // Langkah 2: Hitung sisa detik setelah jam
  let sisaSetelahJam = totalDetik % 3600;

  // Langkah 3: Hitung menit dari sisa tadi
  let menit = Math.floor(sisaSetelahJam / 60); // 1 menit = 60 detik

  // Langkah 4: Sisa detik yang tersisa
  let detik = sisaSetelahJam % 60;

  // Langkah 5: Ubah semua angka jadi 2 digit
  // Misalnya: 1 → "01", 9 → "09"
  if (jam < 10) {
    jam = "0" + jam;
  }
  if (menit < 10) {
    menit = "0" + menit;
  }
  if (detik < 10) {
    detik = "0" + detik;
  }

  // Langkah 6: Gabungkan hasilnya
  let hasil = jam + ":" + menit + ":" + detik;
  return hasil;
}

// Pemakaian fungsi
console.log(konversiDetikKeFormatWaktu(3661));   // Output: "01:01:01"
console.log(konversiDetikKeFormatWaktu(120));    // Output: "00:02:00"
console.log(konversiDetikKeFormatWaktu(59));     // Output: "00:00:59"
console.log(konversiDetikKeFormatWaktu(86400));  // Output: "24:00:00"
