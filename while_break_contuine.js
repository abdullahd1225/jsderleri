let sayi = 5;

while (sayi < 15) {
    
    console.log("merhaba");
    sayi++;
}


for( let j = 5; j < 15; j++) {
    console.log("for döngüsü");
}





let yas = 20 ;

do {
    console.log("do while");
    yas++;

} while (yas < 30);

// tekrar eden bir durum ve şart varsa for 
// kaç tekrar edeceğini bilmiyorsan while döngüsünü 
// bir kod çalışsın sonra da bir şart görünsün istiyorsan do while kullanılır 
// break , countinue , return Umut abiye sor detaylandır


for (let i = 0; i < 50; i++) {

    if (i==12){
        break;
    }

    console.log("break kullanımı");
    
}

for( let i = 10; i < 30; i++) {
    if (i==15) {
        continue;
    }

    console.log("coutinue kullanımı");
}

/* for ( let i = 0; i < 10; i++) {
    if (i==5) {

        return i;
    }
    console.log("return kullanımı");
} */
// hatalı kullanım 
// For içinde return kullanımı sadece fonksiyon içindeyse olur. Aksi takdirde illegal statement hatası alır