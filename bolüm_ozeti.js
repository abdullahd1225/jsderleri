let person = {
    ad:'Abdullah',
    yas:27,
    evliMi:'false'
    
    
};

console.log(person.ad);
console.log(typeof person);
console.log(person instanceof Object);


console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");
//  Burda işlem fonk diye bir değişkene fonksiyon atanıyor .Fonksiyonun 
// sayi isimli bir parametresi var sayi değerine fonksiyon içinde işlem yapılıp
// tekrar sayi değerine atanıyor . 

let sayi = 5;

const fonk = function (sayi) {
    sayi = sayi * 2;
    return sayi;
}

console.log(fonk(sayi));
console.log(sayi);

let myDizi = [1,2,3];

diziElemanlariniCarp (myDizi);
const diziElemanlariniCarp = function (dizi) {
    for (let i = 0; i<dizi.length; i++) {
      dizi [i] = dizi[i] * 2;
   
    }

    return dizi;
}

console.log(diziElemanlariniCarp(myDizi));
console.log(myDizi);

// Fonksiyonlar birer object dir.
