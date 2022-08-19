let myDizi = [1,2,3];

// First class function
const ikiIleCarp = function (sayi) {
   return sayi * 2;

}
const ikiIleBol = function (sayi) {
    return sayi / 2;
 
 }
 const UcEkle = function (sayi) {
    return sayi + 3;
 
 }


 const diziIsimleri = function (dizi , islem) {
    let geciciDizi = [];
    for (let i = 0; i < dizi.length; i++) {
        geciciDizi [i]  = islem(dizi[i]);
        
    }

    console.log(geciciDizi);
 }

 // Higher order function : parametre olarak fonksiyon alan ve/veya
 // return olarak fonksiyon döndüren fonksiyondur.
 // diziİslemleri higher order fonksiyondur.
 // function  içerisine parametre olarak function girildiği zaman higher order function oluyor . 
// functionu sabitleyip kurala göre her yerde kullandığın zaman callback funtion oluyor . 

 diziIsimleri(myDizi , ikiIleCarp);
 diziIsimleri(myDizi , ikiIleBol);
 diziIsimleri(myDizi , UcEkle);

 console.log(myDizi);


 function adimiSoyle ( ad , soyad) {
    console.log("Merhaba"+ "  " + ad + " " + soyad);
 }

 adimiSoyle ("Abdullah" , "Demirci"); // Normal bir fonksiyon

 function adimiBagır (ad , soyad , callback) {
    const mesaj = "Merhaba" +  ad.toUpperCase() + " " + soyad.toUpperCase();
    callback(mesaj);

 }
 //  Yukarıdaki adimiBagir functionuna parametre olarak callback functionunu ekledik . Bu durumda callback fonksiyonunun içindeki çalışan değer msg olarak console a basıldı

 adimiBagır("abdullah " , "demirci", function (msj) {
    console.log(msj);
 });