let sayi1 = 10;
let sayi2 = 2;

let sonuc = sayi1 + sayi2;

sonuc = sayi1 -sayi2;
sonuc = sayi1 * sayi2;
sonuc = sayi1 / sayi2;

sonuc = sayi1 % sayi2;

console.log(sonuc);

let isim = "abdullah";
let yas = 27;
let metinYas = "27";
let soyİsim = "Demirci";

let tamIsim = isim +  soyİsim;
console.log(tamIsim);
console.log(yas);
console.log(metinYas);

// Arttırma azaltma operatörleri

 

// dakikayı saniye cinsine çevirir
let saniyeString = prompt ("saniye cinsinden değer giriniz", "100");
let saniye = parseInt(saniyeString);

let dakika = parseInt((saniye /60) ,10);
let kallanSaniye = saniye % 60;

console.log(typeof saniye);
console.log(`Girdiğiniz  ${saniye} değeri : ${dakika} dakika ve ${kallanSaniye} saniyedir`); 



let girilenDerece = parseInt(prompt("fanrenheit giriniz" , "100"));
let celciusDerece = ( 5 / 9)*(girilenDerece - 32);

console.log("Girdiğiniz " + girilenDerece+" fahrenheit sıcaklık "+ celciusDerece.toFixed(2)+ "derecedir");
 

let girilenYıl = parseInt(prompt("Yıl değerini giriniz", "2020"));   
let artıkYilMi = ( (girilenYıl % 400 == 0) );

console.log("Girilen yıl" + girilenYıl +"artık yıl mı: "+ artıkYilMi);