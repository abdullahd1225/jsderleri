// Diziler içerisinde bri çok veriyi barındıran serilerdir.
// bu değer tutucularının içerisinde nesne vs herşey bulunabilir.
// Diziler içerisinde push,splice ve delete kısımları önemlidir.
// push :  diziye yeni bir değer ekler
// delete:  diziden bir değer siler
// splice:  dizi içerisinde belirlediğiniz indexten sonrasına eklenecek değeri belirtir.
// Dizilerde index 0 dan başlar.
// pop en sondaki elemanı -- shift en baştaki elemanı siler.
//concat dizilerdeki değerleri  sıralı olarak yazdırmaya yarar.
//slice : index değerleri arasında yeni bir dizi oluşturmaya yarar. 
// slice kavramı mevcut diziden yeni bir dizi oluşturmamızı sağlar.



let isimler = ["abdullah" , "Çınar","Galatasaray"] ;

console.log("isimler :" + isimler.toString());
console.log(isimler.join( " ++ "));


let diziElemanSayisi = isimler.push("abdullah");
console.log(isimler.toString() + "çıkarılan eleman: " + diziElemanSayisi);

let dizidenCikarilanElemanSayisi = isimler.pop();

delete isimler [1];
console.log(isimler.toString()+ " " + isimler[1]);

let sayilar = [1,2,3,4,5,6,7,8];

sayilar.splice(8,0,"abdullah","Çınar","aslan");

console.log(sayilar.toString());

