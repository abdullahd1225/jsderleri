/* // for ile yazdırma

let isimm = "abdullah" ; 

for (let i = 0; i < 5; i++) {
    console.log(isimm);
    
} 

// while ile yazdırma

let isim = 0 ;

while (isim < 6) {

    console.log("abdullah demirci");
    isim++;
}

 
// do while ile  döngü

let isim1  = 0;

do {
 
    console.log("abdullah demirci");
    isim1++;

} while (isim1 < 6) ; */

/* let toplam = 0;

for (let i = 1; i < 100; i++) {
    toplam = toplam + i ;
    toplam += i ;  ikinci yöntem
    
}

console.log("1 den 100 e kadar olan sayıların toplamı: " +  toplam);

 */


/* let sayiToplam = "";

for (let i = 1; i <= 10; i++) {

    if (i !=10 ) {
        sayiToplam = sayiToplam + i + ",";
    }else  {
        sayiToplam = sayiToplam + i;
    }
    
    
}console.log(sayiToplam);
 */
// Girilen değerin faktöriyelini hesaplayan kod 

/* let sayi = parseInt(prompt("sayi giriniz","10"));
let faktoriyel = 1;


    for (let i = 1; i <= sayi; i++) {
        faktoriyel = faktoriyel * i;
    }


console.log(faktoriyel); */

// Girilen sınav değerine göre harfli notu veren program 



/* let girilenSayi1 = parseInt(prompt("Sayı 1 giriniz ", "10"));
let girilenSayi2 = parseInt(prompt("Sayı 2 giriniz", "20"));

if (girilenSayi1 + girilenSayi2 <30) {
    console.log("FF aldınız");

}else if(girilenSayi1 + girilenSayi2 < 50) {
    console.log("DD aldınız");
}else if(girilenSayi1+girilenSayi2 < 75){
    console.log("DC Aldınız");
}else if (girilenSayi1 + girilenSayi2 > 80) {

    console.log("AA aldınız");
} */

// iki fonksiyonun matematiksel değerlerini yazdıran program

//x>0  , y<0 ise f(x,y) = 4x+2y+4
//x>0  , y=0 ise f(x,y) = 2x-3y+3
//x<0  , y>0 ise f(x,y) = 3x+4y+3


/* let xdegeri = parseInt(prompt("x değeri giriniz ","1"))
let ydegeri = parseInt(prompt("y değeri giriniz ","1"))

let islemSonucu = 0;




if( xdegeri >0 && ydegeri<0) {

    islemSonucu = (4 * xdegeri + 2 * ydegeri + 4);

}else if ( xdegeri > 0 && ydegeri == 0) {

    islemSonucu = (2 * xdegeri -3 * ydegeri + 3);

}else if( xdegeri<0  && ydegeri>0) {

    islemSonucu = (3 * xdegeri +4 * ydegeri + 3);
}

console.log("x değeri:" + xdegeri , "y değeri: " + ydegeri , "sonuç: " + islemSonucu);

 */


/* let uretilenSayi = parseInt(Math.random() * 101);
console.log("Üretilen sayı:" + uretilenSayi);

let tahmin = -1;
let tahminSayisi = 0;

while (tahmin != uretilenSayi) {

    tahmin = parseInt(prompt("Bir sayı giriniz"));
    tahminSayisi++;

    if(tahmin==uretilenSayi) {

        console.log("Tebrikler"+tahminSayisi + "seferde" + "bildiniz");
    }else if (tahmin < uretilenSayi){
        console.log("Biraz daha çık");
    } else {
        console.log("Biraz daha in");
    }
}  */

// Girilen sayıları 0 yazınca çarpıp console a yazdıran program

/* let girilenSayi  = parseInt(prompt("Bir sayı giriniz" , "50"));
let carpimSonucu = 1;


while (girilenSayi !=0) {
    carpimSonucu = carpimSonucu * girilenSayi;
    girilenSayi  = parseInt(prompt("Bir sayı giriniz"));
}

console.log("Çarpım sonucu: " + carpimSonucu); */

// Girilen iki sayının ebob değerini yazdıran programı

/* let Sayi1 = parseInt(prompt("Sayı 1 i giriniz"));
let Sayi2 = parseInt(prompt("Sayı 2 yi giriniz"));

let ebob , kontrol = 2; 

while (kontrol <= Sayi1 && kontrol <= Sayi2) {

    if (Sayi1 % kontrol == 0 &&  Sayi2 % kontrol == 0) {
        ebob = kontrol;
    }
    kontrol++;
}

if (ebob == 1){
    console.log("Bu sayılar aralarında asaldır");
} else {
    console.log("Sayıların ortak böleni: " + ebob);
} */


// Girilen değerin asal sayılarını console a bastıran uygulama

/* let girilenSayi = parseInt(prompt("Bir sayı giriniz" , "10"));
gosterilecekMetin ="";

for (let i = 0; i < girilenSayi; i++) {


    let asalSayiMi = true;

    for (let j =2; j<i; j++) {

        if (i % j == 0) {

            asalSayiMi = false;
            break;
        }


    }
    if (asalSayiMi == true) {
        gosterilecekMetin = gosterilecekMetin + i + " ";

    }

}

console.log(gosterilecekMetin); */




   
   