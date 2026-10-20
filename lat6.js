let daftarHarga = [25000,12000,12000,8000,60000];
let jumlahItemPremium = 0;

console.log("=== FILTER KATEGORI HARGA ===");

for(let i = 0; i < daftarHarga.length; i++){
    let harga = daftarHarga [i];

    if(harga > 20000){
        console.log((i + 1) + " Rp." + harga + " = " + "[PREMIUM]");
        jumlahItemPremium++;
    } else {
        console.log((i + 1) + " Rp." + harga + " = " + "[REGULER]");
    }
}
console.log("======================");
console.log("jumlah Item Premium = " + jumlahItemPremium + " barang");
console.log("======================");