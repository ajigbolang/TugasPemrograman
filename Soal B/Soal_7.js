/**
* Soal 7: Validasi Data Formulir Pendaftaran Kursus
* Buatlah fungsi bernama `validasiFormData` yang menerima satu parameter `dataForm`
(object).
* Object `dataForm` memiliki struktur:
* {
* namaLengkap: "John Doe",
* email: "john.doe@example.com",
* nomorHp: "081234567890",
* tanggalLahir: "15-08-2005" // Format DD-MM-YYYY
* }
*
* Fungsi ini harus melakukan validasi berdasarkan aturan berikut:
* - `namaLengkap`: Harus berupa huruf dan spasi saja, maksimal 50 karakter, tidak
boleh kosong.
* - `email`: Harus memiliki format email yang valid (mengandung "@" dan ".").
* - `nomorHp`: Harus diawali "08", terdiri dari 10-13 digit angka.
* - `tanggalLahir`: Harus dalam format "DD-MM-YYYY" dan usia minimal pendaftar adalah
12 tahun per tanggal tes (13 Mei 2025).
*
* Fungsi ini harus me-return sebuah object dengan struktur:
* {
* isValid: boolean, // true jika semua valid, false jika ada yang tidak valid
* errors: string[] // array berisi pesan error untuk setiap field yang tidak valid.
Kosong jika isValid true.
* }
* Contoh pesan error:
* - "Nama lengkap tidak boleh kosong."
* - "Nama lengkap hanya boleh berisi huruf dan spasi."
* - "Format email tidak valid."
* - "Nomor HP harus diawali 08 dan terdiri dari 10-13 digit."
* - "Format tanggal lahir harus DD-MM-YYYY."
* - "Usia minimal pendaftar adalah 12 tahun."
*/

function validasiFormData(dataForm) {
    const errors = []; // Untuk menyimpan pesan error
    const tanggalTes = new Date(2025, 4, 13); // 13 Mei 2025 (bulan ke-4 = Mei)

    // Validasi nama lengkap
    if (!dataForm.namaLengkap || dataForm.namaLengkap.trim() === "") {
        errors.push("Nama lengkap tidak boleh kosong.");
    } else {
        const namaRegex = /^[A-Za-z\s]+$/; // Hanya huruf dan spasi
        if (!namaRegex.test(dataForm.namaLengkap)) {
            errors.push("Nama lengkap hanya boleh berisi huruf dan spasi.");
        }
        if (dataForm.namaLengkap.length > 50) {
            errors.push("Nama lengkap maksimal 50 karakter.");
        }
    }

    // Validasi email
    if (!dataForm.email.includes("@") || !dataForm.email.includes(".")) {
        errors.push("Format email tidak valid.");
    }

    // Validasi nomor HP
    const hp = dataForm.nomorHp;
    const hpRegex = /^08\d{8,11}$/; // Diawali 08 dan panjang 10-13 digit
    if (!hpRegex.test(hp)) {
        errors.push("Nomor HP harus diawali 08 dan terdiri dari 10-13 digit.");
    }

    // Validasi tanggal lahir
    const tanggalRegex = /^\d{2}-\d{2}-\d{4}$/;
    if (!tanggalRegex.test(dataForm.tanggalLahir)) {
        errors.push("Format tanggal lahir harus DD-MM-YYYY.");
    } else {
        const parts = dataForm.tanggalLahir.split("-");
        const tanggal = parseInt(parts[0], 10);
        const bulan = parseInt(parts[1], 10) - 1; // bulan dimulai dari 0
        const tahun = parseInt(parts[2], 10);
        const tanggalLahir = new Date(tahun, bulan, tanggal);

        // Hitung usia
        let usia = tanggalTes.getFullYear() - tanggalLahir.getFullYear();
        const selisihBulan = tanggalTes.getMonth() - tanggalLahir.getMonth();
        if (
            selisihBulan < 0 ||
            (selisihBulan === 0 && tanggalTes.getDate() < tanggalLahir.getDate())
        ) {
            usia--;
        }

        if (usia < 12) {
            errors.push("Usia minimal pendaftar adalah 12 tahun.");
        }
    }

    // Return hasil validasi
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

// Contoh penggunaan
const data = {
    namaLengkap: "Risyad",
    email: "risyad@gmail.com",
    nomorHp: "081234567890",
    tanggalLahir: "15-08-2005"
};

const hasil = validasiFormData(data);
console.log(hasil);
