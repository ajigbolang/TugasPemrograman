/**
* Soal 9: Tampilan Input dan Output Nama Sederhana di Flutter
*
* Tugas:
* Buatlah sebuah tampilan Flutter sederhana (cukup satu StatelessWidget atau
StatefulWidget)
* yang memiliki komponen-komponen berikut:
*
* 1. Sebuah `AppBar` dengan judul "Profil Pengguna".
* 2. Sebuah `TextField` yang memungkinkan pengguna untuk memasukkan nama mereka.
* Berikan label atau hint text seperti "Masukkan nama Anda".
* 3. Sebuah `ElevatedButton` dengan teks "Submit" atau "Tampilkan".
* 4. Sebuah `Card` atau `Text` widget di bawah tombol, yang akan menampilkan
* output "Halo, [nama yang diinput]!" setelah tombol ditekan.
* Awalnya, sebelum tombol ditekan, bagian ini bisa kosong atau menampilkan pesan
default.
*
* Ketentuan:
* - Gunakan StatefulWidget jika Anda perlu mengelola state untuk input dan output
nama.
* - Fokus pada fungsionalitas dasar dan tata letak widget yang benar.
* - Anda tidak perlu melakukan styling yang kompleks, tampilan default Flutter sudah
cukup.
*
* Output:
* Serahkan kode Dart lengkap untuk Widget tersebut.
*/
// Kode Dart Anda di sini


import 'package:flutter/material.dart';

class UserProfileScreen extends StatefulWidget {
  @override
  _UserProfileScreenState createState() => _UserProfileScreenState();
}

class _UserProfileScreenState extends State<UserProfileScreen> {
  // Deklarasikan controller
  TextEditingController _nameController = TextEditingController();

  // Variabel untuk menyimpan output nama
  String _output = "";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Profil Pengguna"),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            TextField(
              controller: _nameController,
              decoration: InputDecoration(
                hintText: "Masukkan nama Anda",
              ),
            ),
            SizedBox(height: 16),
            ElevatedButton(
              onPressed: () {
                setState(() {
                  _output = _nameController.text;
                });
              },
              child: Text("Tampilkan", style: TextStyle(color: Colors.black),),
            ),
            SizedBox(height: 16),
            _output.isEmpty
                ? Text("Belum ada nama yang dimasukkan.")
                : Card(
                  color: Colors.orangeAccent,
                    child: Padding(
                      padding: const EdgeInsets.all(12.0),
                      child: Text(
                        "Halo, $_output!",
                        style: TextStyle(fontSize: 18, color: Colors.white),
                      ),
                    ),
                  ),
          ],
        ),
      ),
    );
  }
}
