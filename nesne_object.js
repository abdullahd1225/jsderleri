// neseneler içerisinde herşeyi tutabiliriz.
// Dizi ,fonksiyon vs ..
// En iyi değer tutucu biçimidir.

let abdullah = {
    adı : 'abdullah',
    soyadı : 'Demirci',
    evliMi : 'False',
    dogumYili: 1995,
    sevdigiRenkler: ['yeşil','mavi'],
    yasiHesapla : function () {
        this.yas = 2020 - this.dogumYili;
    }
    
};

let Cinar = {
    adı : 'Cinar Deniz',
    soyadı : 'Karakoç',
    evliMi : 'False',
    sevdigiRenkler: ['Sarı','Kırmızı'],
    yasiHesapla : function () {
        this.yas = 2020 - this.dogumYili;
    }
    
};

console.log(typeof(Cinar)); // verinin tipini belirler 



console.log(abdullah);
console.log(abdullah.dogumYili);
console.log(abdullah.dogumYili);