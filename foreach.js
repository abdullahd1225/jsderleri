let sayilar = [1,2,3,4,5];

console.log(sayilar);

for (let i = 0; i < sayilar.length; i++) {
    console.log(sayilar[i]);
    
}

sayilar.forEach (function(sayi , i){
    console.log(sayi , i);
}) ;

/* console.log("++++++++++++++++++++++");

for ( let item of sayilar) {
    console.log(item);
} */