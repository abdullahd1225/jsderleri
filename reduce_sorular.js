/* function parantezlerDengeliMi  (metin) {
    const dizi  = metin.split('');
    
    const sonuc = dizi.reduce(function(previous,karakter){
        if (previous < 0) {

            return previous;
            
        }
        if (karakter === '(') {
            return ++previous;
        }
        if (karakter === ')') {
            return --previous;
        }

        return  previous;
    } , 0);

    if (!sonuc) {
        console.log(metin + "dengeli bir yapıdadır.");
    } else {
        console.log(metin + "dengeli bir yapıda değildir.");
    }

}

parantezlerDengeliMi('()'); */


// marp , filter , reduce , some , every , find

const sayilar = [1,2,3,4,5,6,7,8,9];

const yeniSayilar = sayilar.filter(function(sayi) {
    return sayi % 2 !== 0;
});
console.log(yeniSayilar);

const sayilarinKaresi = yeniSayilar.map(function(sayi){
    return sayi * sayi;
});
console.log(sayilarinKaresi);

const toplam = sayilarinKaresi.reduce(function(GenelToplam,sayi){
    if (sayi > 10) {
       return GenelToplam = GenelToplam +  sayi;
    } else {
        return GenelToplam;
    }

},0);

console.log(toplam);


console.log(yeniSayilar);
console.log("+++++++++++++++++++++++++++");
console.log(sayilarinKaresi);
console.log("+++++++++++++++++++++++++++");
console.log(toplam); 

//Kısa versiyon 


function kısaVersiyon (sayilar) {
    const sonuc = sayilar.filter(function(sayi){
        return sayi % 2 !==0;
    }).map(function(sayi) {
        return sayi * sayi;
    }).reduce(function(GenelToplam , sayi) {
        if (sayi > 10) {
            return GenelToplam = GenelToplam +  sayi;
         } else {
             return GenelToplam;
         }

    }, 0);
    console.log(sonuc);
}

kısaVersiyon(sayilar);

// Daha yalın hali 

/* function kısaVersiyon (sayilar) {
    return sayilar.filter(sayi => sayi % 2 !==0)
                  .map(sayi => sayi * sayi)
                  reduce((GenelToplam,sayi) => 10 ? GenelToplam += sayi : GenelToplam,0);
}

kısaVersiyon(sayilar);
console.log(kısaVersiyon(sayilar)); */

const sayilar11 = [1,2,3,4,5,6,7,8,9];