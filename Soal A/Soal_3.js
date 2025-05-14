/**
* Soal 3: Pengolahan Data Produk
* Diberikan array produk sebagai berikut:
*/
// const daftarProduk = [
// { id: "P001", nama: "Laptop Gaming XYZ", harga: 12000000, stok: 5 },
// { id: "P002", nama: "Mouse Wireless ABC", harga: 150000, stok: 20 },
// { id: "P003", nama: "Keyboard Mekanikal QWE", harga: 750000, stok: 10 },
// { id: "P004", nama: "Monitor LED 24 inch", harga: 1500000, stok: 8 }
// ];
// Tugas (hasil dari setiap tugas sebaiknya di-return oleh fungsi atau di-console.logjika tidak diminta return spesifik):
// a. Buatlah fungsi `cariProdukTermahal(produk)` yang menerima `daftarProduk`dan me-return object produk dengan harga termahal.
// b. Buatlah fungsi `hitungTotalNilaiStok(produk)` yang menerima `daftarProduk`dan me-return total nilai dari semua stok (jumlah dari harga * stok untuk setiap produk).
// c. Buatlah fungsi `formatNamaDanStok(produk)` yang menerima `daftarProduk` dan me-return sebuah array baru yang hanya berisi object dengan properti `nama`dan `stok` dari setiap produk.
// Contoh output untuk c: [{ nama: "Laptop Gaming XYZ", stok: 5 }, { nama: "MouseWireless ABC", stok: 20 }, ...]*/

// Kode Anda di sini

// Data produk
const daftarProduk = [
  { id: "P001", nama: "Laptop Gaming XYZ", harga: 12000000, stok: 5 },
  { id: "P002", nama: "Mouse Wireless ABC", harga: 150000, stok: 20 },
  { id: "P003", nama: "Keyboard Mekanikal QWE", harga: 750000, stok: 10 },
  { id: "P004", nama: "Monitor LED 24 inch", harga: 1500000, stok: 8 }
];

// a. Cari produk dengan harga termahal
function cariProdukTermahal(produk) {
  let termahal = produk[0];

  for (let i = 1; i < produk.length; i++) {
    if (produk[i].harga > termahal.harga) {
      termahal = produk[i];
    }
  }

  return termahal;
}

// b. Hitung total nilai dari semua stok (harga * stok)
function hitungTotalNilaiStok(produk) {
  let total = 0;

  for (let i = 0; i < produk.length; i++) {
    total += produk[i].harga * produk[i].stok;
  }

  return total;
}

// c. Format hanya nama dan stok
function formatNamaDanStok(produk) {
  return produk.map(item => ({
    nama: item.nama,
    stok: item.stok
  }));
}

// Output semua fungsi
console.log("Produk termahal:", cariProdukTermahal(daftarProduk));
console.log("Total nilai stok:", hitungTotalNilaiStok(daftarProduk));
console.log("Nama dan stok produk:", formatNamaDanStok(daftarProduk));
