// var jmlAngkot = 10;
// var angkotBeroperasi = 6;

// for (var noAngkot=1; noAngkot <= jmlAngkot; noAngkot++){
//     if (noAngkot<=6) {
//         console.log('Angkot No. ' +noAngkot + 'beroperasi dengan baik.');
//     }else {
//         console.log('Angkot No. ' +noAngkot+ 'sedang tidak beroperasi.');
//     }
// }



// var angka = prompt('Masukkan Angka');

// if (angka % 2 == 0) {
//     alert(angka + ' adalah bilangan genap');
// }else{
//     alert(angka +' adalah bilangan ganjil');
// }


// var jmlAngkot= 10;
// var angkotBeroperasi = 6;

// for (var noAngkot=1; noAngkot <=10;noAngkot++){
//     if (noAngkot<=6 && noAngkot !==5){
//         console.log('Angkot No.' +noAngkot+ ' beroperasi dengan baik');
//     }else if(noAngkot==8 || noAngkot==10 || noAngkot==5){
//         console.log('Angkot No.' +noAngkot+ ' lembur');
//     }else{
//         console.log('Angkot No.' +noAngkot+ ' Sedang tidak beroperasi');
//     }
// }

//Switch


// let lagi = true;

// while (lagi == true){

// var item = prompt('Masukkan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink');
// switch (item){
//     case 'nasi':
//     case 'daging':
//     case 'susu':
//         alert('Makanan / minunam SEHAT!');
//         break;
//     case 'hamburger':
//     case 'softdrink':
//         alert('Makanan / minuman TIDAK SEHAT!');
//         break;
//     default :
//         alert('Anda memasukkan makanan /minuman yang salah!');
//         break;
// }
//  lagi = confirm('Lagi?');
// }


//Pengulangan dan Pengkondisian Bersarang

var s ='';

for (var i = 0; i < 10; i++){
    for (var j = 0; j < 5; j++){
        s += '*';
    }
    s += '\n';
}
console.log(s);