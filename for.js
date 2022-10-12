var noAngkot= 1;
var jmlAngkot=10;
var angkotBeroperasi = 3;

while(noAngkot <= angkotBeroperasi){
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
    noAngkot++;
}

for (noAngkot = angkotBeroperasi +1 ; noAngkot <= jmlAngkot; noAngkot++){
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
}

// for (noAngkot > angkotBeroperasi ; noAngkot <= jmlAngkot; noAngkot++){
//     console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
// }