// SOAL 5 - STUDI KASUS DATA SISWA

const namaSiswa = ["Andi", "Budi", "Citra", "Dewi", "Eko"];

const nilaiSiswa = [80, 75, 90, 85, 70];

console.log("SOAL 5 - STUDI KASUS DATA SISWA");
console.log("Jumlah siswa:", namaSiswa.length);

console.log("Siswa pertama:", namaSiswa[0], "-", nilaiSiswa[0]);

console.log(
    "Siswa terakhir:",
    namaSiswa[namaSiswa.length - 1],
    "-",
    nilaiSiswa[nilaiSiswa.length - 1]
);

nilaiSiswa[1] = 88;
nilaiSiswa[4] = 82;

console.log("Siswa ketiga:", namaSiswa[2], "-", nilaiSiswa[2]);

console.log("Seluruh nama siswa:", namaSiswa);
console.log("Seluruh nilai siswa:", nilaiSiswa);