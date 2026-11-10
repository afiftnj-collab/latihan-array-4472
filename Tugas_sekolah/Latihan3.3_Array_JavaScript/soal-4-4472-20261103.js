// SOAL 4 - PROPERTI LENGTH

const daftarProduk = [
    "Keyboard",
    "Mouse",
    "Monitor",
    "Flashdisk",
    "Headset",
    "Webcam"
];

console.log("SOAL 4 - PROPERTI LENGTH");
console.log("Jumlah produk:", daftarProduk.length);
console.log("Index produk terakhir:", daftarProduk.length - 1);
console.log("Nama produk terakhir:", daftarProduk[daftarProduk.length - 1]);

const indexTengah = Math.floor((daftarProduk.length - 1) / 2);

console.log("Index tengah kiri:", indexTengah);
console.log("Produk tengah kiri:", daftarProduk[indexTengah]);