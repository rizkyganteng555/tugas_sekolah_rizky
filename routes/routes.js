// import express
import  Express  from "express";

//init express router
const router = Express.Router();

router.get('/biodata', (req, res) => {
    var nama = "rizky muhammad rahmad";
    var tempat_lahir = "bandung";
    var tanggal_lahir = "31 januari 2007";
    var jenis_kelamin = "laki laki";
    var agama = "islam";
    var alamat = "bandung";
    var telepon = "081324324582";
    var email = "orangsuksesrizky@gmail.com";
    var hobi = "main game";
    var cita_cita = "jadi kaya"
    res.send(
        'nama :'+ nama + '<br>' +
        'tempat_lahir :'+ tempat_lahir + '<br>' +
        'tanggal_lahir :'+ tanggal_lahir + '<br>' +
        'jenis_kelamin :'+ jenis_kelamin + '<br>' +
        'agama :'+ agama + '<br>' +
        'alamat :'+ alamat + '<br>' +
        'telepon :'+ telepon + '<br>' +
        'email :'+ email + '<br>' +
        'hobi :'+ hobi + '<br>' +
        'cita_cita :'+ cita_cita  
     );
});
router.get('/aritmatika', (req, res) => {
    var bilangan1 = 10;
    var bilangan2 = 5;
    var tambah = bilangan1 + bilangan2;

    var bilangan3 = 15;
    var bilangan4 = 5;
    var kurang = bilangan3 - bilangan4

    var bilangan5 = 20;
    var bilangan6 = 5;
    var bagi = bilangan5 / bilangan6

    var bilangan7 = 20;
    var bilangan8 = 5;
    var perkalian = bilangan7 * bilangan8

    res.send( 
        '<h3>Penjumlahan</h3>' +
        'bilangan ke 1 : ' + bilangan1 + '<br>' +
        'bilangan ke 2 : ' + bilangan2 + '<br>' +
        'hasil : ' + tambah + '<hr>' +
        
        '<h3>pengurangan</h3>' +
        'bilangan ke 3 : ' + bilangan3 + '<br>' +
        'bilangan ke 4 : ' + bilangan4 + '<br>' +
        'hasil : ' + kurang + '<hr>' +

        '<h3>pembagian</h3>' +
        'bilangan ke 5 : ' + bilangan5 + '<br>' +
        'bilangan ke 6 : ' + bilangan6 + '<br>' +
        'hasil : ' + bagi + '<hr>' +

        '<h3>perkalian</h3>' +
        'bilangan ke 7 : ' + bilangan7 + '<br>' +
        'bilangan ke 8 : ' + bilangan8 + '<br>' +
        'hasil : ' + perkalian + '<hr>'        
    );
});

router.get('/bangun_datar', (req, res) => {
    var panjang = 5;
    var lebar = 5;
    var kali = panjang * lebar

    var panjang1 = 20;
    var lebar1 = 10;
    var kali1 =panjang1 * lebar1

    var sisi1 = 20;
    var sisi2 = 20;
    var sisi3 = 20;
    var tambah = sisi1 + sisi2 + sisi3

    var v = 3.14;
    var jari_jari = 6;
    var kali3 = v * jari_jari;
 
    res.send( 
    '<h3>Persegi</h3>' +
    'luas = panjang x lebar <br>'+
    'panjang : ' + panjang + '<br>'+
    'lebar :' + lebar + '<br>' +
    'hasil : ' + kali + '<br>' +
    
    '<h3>Persegi panjang</h3>' +
    'luas = panjang x lebar <br>'+
    'panjang : ' + panjang1 + '<br>'+
    'lebar :' + lebar1 + '<br>' +
    'hasil : ' + kali1 + '<br>' +

    '<h3>segitiga sama sisi</h3>' +
    'sisi + sisi + sisi <br>'+
    'sisi 1 : ' + sisi1 + '<br>'+
    'sisi 2 :' + sisi2 + '<br>' +
    'sisi 3 : ' + sisi3 + '<br>' +
    'hasil : ' + tambah + '<br>' +
 
    '<h3>lingkaran</h3>' +
    'v x jari_jari <br>' +
    'v : ' + v + '<br>'+
    'jari_jari : ' + jari_jari + '<br>' +
    'hasil : ' + kali3 + '<hr>'
    );
});

router.get('/biodataa/:nama/:tempat/:tanggal/:jenis/:agama/:alamat/:telepon/:email/:hobi/:cita', (req, res) => {
    var nama = req.params.nama;
    var tempat_lahir = req.params.tempat;
    var tanggal_lahir = req.params.tanggal;
    var jenis_kelamin = req.params.jenis;
    var agama = req.params.agama;
    var alamat = req.params.alamat;
    var telepon = req.params.telepon;
    var email = req.params.email;
    var hobi = req.params.hobi;
    var cita_cita = req.params.cita
    res.send(
        'nama :'+ nama + '<br>' +
        'tempat_lahir :'+ tempat_lahir + '<br>' +
        'tanggal_lahir :'+ tanggal_lahir + '<br>' +
        'jenis_kelamin :'+ jenis_kelamin + '<br>' +
        'agama :'+ agama + '<br>' +
        'alamat :'+ alamat + '<br>' +
        'telepon :'+ telepon + '<br>' +
        'email :'+ email + '<br>' +
        'hobi :'+ hobi + '<br>' +
        'cita_cita :'+ cita_cita  
     );
});

router.get('/tes/:nama/:kelas/:pts/:pas', (req, res) => {
    var nama = req.params.nama;
    var kelas = req.params.kelas;
    var pts = parseInt(req.params.pts);
    var pas = parseInt(req.params.pas);

    var rapot = (pts + pas ) / 2;

    const score = rapot;

    res.send(
        'nama :'+ nama + '<br>' +
        'kelas :'+ kelas + '<br>' +
        'nilai pts :'+ pts + '<br>' +
        'nilai pas :'+ pas + '<br>' +
         'nilai rapot :' + rapot

     );
});

router.get('/tess/:nama/:kelas/:pts/:pas', (req, res) => {
    var nama = req.params.nama;
    var kelas = req.params.kelas;
    var pts = parseInt(req.params.pts);
    var pas = parseInt(req.params.pas);
  
    var rapot = (pts + pas) / 2;
  
    const score = rapot;

    if (score >= 90 && score <= 100) {
        response += 'Grade A';
      } else if (score >= 80 && score <= 89) {
        response += 'Grade B';
      } else if (score >= 70 && score <= 79) {
        response += 'Grade C';
      } else if (score >= 60 && score <= 69) {
        response += 'Grade D';
      } else if (score >= 50 && score <= 59) {
        response += 'Grade E';
      } else if (score >= 0 && score <= 49) {
        response += 'Sing Rajin';
      } else {
        response += 'Nilai tidak valid';
      }
  
    var response = 'Nama: ' + nama + '<br>' +
                  'Kelas: ' + kelas + '<br>' +
                  'Nilai PTS: ' + pts + '<br>' +
                  'Nilai PAS: ' + pas + '<br>' +
                  'Nilai Raport: ' + rapot + '<br>' +
                  'Keterangan: ' + grade
  
    res.send(response);
  });

  router.get('/bersarang/:nama/:jurusan/:kelas', (req, res) => {

    var nama = req.params.nama;
    var jurusan = req.params.jurusan;
    var kelas = req.params.kelas;

    if (jurusan == 'RPL') {
        if (kelas == '10 RPL') {
            var ket = 'Anda Kelas 10 RPL';
        } else if (kelas == '11 RPL') {
            var ket = 'anda kelas 11 RPL';
        } else if (kelas == '12 RPL') {
            var ket = 'anda kelas 12 RPL';
        } else {
            var ket = 'anda alumni cuyyyyyyyyyyyyyy';
        }
    } else

    if (jurusan == 'TKRO') {
        if (kelas == '10 TKRO') {
            var ket = 'Anda Kelas 10 TKRO';
        } else if (kelas == '11 TKRO') {
            var ket = 'anda kelas 11 TKRO';
        } else if (kelas == '12 TKRO') {
            var ket = 'anda kelas 12 TKRO';
        } else {
            var ket = 'anda alumni cuyyyyyyyyyyyyyy';
        }
    } else

    if (jurusan == 'TBSM') {
        if (kelas == '10 TBSM') {
            var ket = 'Anda Kelas 10 TBSM';
        } else if (kelas == '11 TBSM') {
            var ket = 'anda kelas 11 TBSM';
        } else if (kelas == '12 TBSM') {
            var ket = 'anda kelas 12 TBSM';
        } else {
            var ket = 'anda alumni cuyyyyyyyyyyyyyy';
        }
    } else
    if (jurusan == 'RPL') {
        var ket = 'Anda Jurusan RPL';
    } else if (jurusan == 'TKRO') {
        var ket = 'Anda Jurusan TKRO';
    } else if (jurusan == 'TBSM') {
        var ket = 'Anda Jurusan TBSM';
    } else {
        var ket ="Jurusan Tidak Tersedia"
    }
    res.send(
        'Nama :' + nama + '<br>' +
        'jurusan :' + ket
        );
});

router.get('/starbuck/:nama/:tanggal/:jenis/:pesanan/:jumlah', (req, res) => {
    var nama = req.params.nama;
    var tanggal = req.params.tanggal;
    var jenis = req.params.jenis;
    var pesanan = req.params.pesanan;
    var jumlah = req.params.jumlah;

    if (jenis == 'makanan') {
        if (pesanan == 'nasi goreng') {
            var harga = 20000;
        } else if (pesanan == 'mie goreng') {
            var harga = 30000;
        } else if (pesanan == 'ayam goreng') {
            var harga = 40000;
        } else {
            var ket = 'menu tidak ada';
        }
    } else if (jenis == 'minuman') {
        if (pesanan == 'air mineral') {
            var harga = 10000;
        } else if (pesanan == 'jus') {
            var harga = 20000;
        } else if (pesanan == 'kopi') {
            var harga = 30000;
        } else {
            var ket = 'menu tidak ada';
        }
    } 

    var totaal = jumlah*harga
    if (totaal >=100000){
        var diskon = totaal - (totaal * 0.5)
    } else {
        var diskon = 0
    }
    var totalbayar = totaal - diskon

    res.send(
        '<h3>starbuck lokal</h3>' +
        'nama pembeli:'+ nama + '<br>' +
        'tanggal :'+ tanggal + '<br>' +
        'jenis :'+ jenis + '<br>' + 
        'harga :'+ harga + '<br>' +
        'pesanan :'+ pesanan + '<br>' +
        'jumlah :'+ jumlah + '<br>' +
        '---------------------------------------------------------<br>' +
        'total :' + totaal + '<br>' +
        'diskon 50%: '+ diskon + '<br>'+
        'total pembayaran :' + totalbayar + '<br>'+
        '---------------------------------------------------------<br>'+
        '>>>>>>>>>>>>>>>TERIMAKASIH<<<<<<<<<<<<<<<'
     );
    });

    router.get('/sample', (req, res) => {
       
        res.send(
            '<h3>Selamat Datang</h3>'
            );
    });
    




//export default router
export default router;