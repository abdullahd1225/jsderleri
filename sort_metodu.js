const isimler = ["Abdullah" , "Çınar","Zafer","Atilla"];

const sayilar = [1,50,2,41,84,8,35,3];

const ogrenciler = [
    {id:1 , isim:'Abdullah' ,  yas:27},
    {id:2 , isim:'Çınar' ,  yas:5},
    {id:3 , isim:'Zafer' ,  yas:24},
    {id:4 , isim:'Atilla' ,  yas:27},
   
];

/* // string diziyi a 'dan z'ye sırala

const adanZyeSiraliDizi = isimler.sort();
console.log(adanZyeSiraliDizi);
//string diziyi z 'den a'ya sırala

const zdenAyaSiraliDizi = adanZyeSiraliDizi.reverse();
console.log(adanZyeSiraliDizi); */


// Yukarıdaki işlemin kısa hali daha basit // Önce adan zye sıralanıyor sonra reverse ile sıralanmış dizinin tersi yazılıyor.
const kisa = isimler.sort().reverse();

console.log(kisa);






// sayilari küçükten büyüğe doğru sıralama






//nesneleri sıralama