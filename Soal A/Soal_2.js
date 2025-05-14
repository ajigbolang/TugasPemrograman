/**
* Soal 2: Sistem Login Sederhana
* Buatlah sebuah fungsi bernama `prosesLogin` yang menerima dua parameter:
* - `username` (string)
* - `password` (string)
*
* Fungsi ini harus melakukan validasi berdasarkan aturan berikut:
* - Username minimal harus terdiri dari 5 karakter.
* - Password minimal harus terdiri dari 8 karakter.
* - Username tidak boleh mengandung spasi.
*
* Fungsi ini harus me-return sebuah object dengan struktur:
* - Jika valid: { status: true, message: "Login berhasil" }
* - Jika tidak valid: { status: false, message: "Pesan error yang sesuai" }
* (Contoh pesan error: "Username minimal 5 karakter", "Password minimal 8 karakter", "Username tidak boleh mengandung spasi")
* Jika ada beberapa error, cukup tampilkan salah satu pesan error yang pertama terdeteksi.
*/

// function prosesLogin(username, password) {
// // Kode Anda di sini

function prosesLogin(username, password) {
  // Cek apakah username kurang dari 5 karakter
  if (username.length < 5) {
    return { status: false, message: "Username minimal 5 karakter" };
  }

  // Cek apakah username mengandung spasi
  if (username.includes(" ")) {
    return { status: false, message: "Username tidak boleh mengandung spasi" };
  }

  // Cek apakah password kurang dari 8 karakter
  if (password.length < 8) {
    return { status: false, message: "Password minimal 8 karakter" };
  }

  // Jika semua validasi lolos
  return { status: true, message: "Login berhasil" };
}

// }