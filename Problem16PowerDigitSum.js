/*
Bu problemde bize örnek olarak 2 üzeri 15’in sonucu verilmiş.
32768 ve bu sayının basamaklarındaki rakamların toplamı olarak 26 değeri verilmiş
ve bizden aynısını 2 üzeri 1000 için bulmamız istenmiş. Bu bölümde yazdığımız 2
adet iç içe for döngüsü ile sayının basamaklarını if else blokları ile bularak başka bir değişkene atıyoruz
ilk başta tanımladığımız toplam değişkenine sayı[i] şeklinde tek
tek basamaklara ulaşarak toplama işlemini yapıyoruz ve işlem bitiyor.
Console.log şeklinde toplamı ekrana yazdırıyoruz ve sonuç 1366.
*/

var sayi = [1],toplam = 0;

for(var i = 0; i < 1000; i++)
{
    var x = 0,
        count = sayi.length + 1
    
    for(var say = 0; say < count; say++)
    {
        var basamak = sayi[say] || 0;

        basamak = 2* basamak + x;

        if(basamak > 9)
        {
            basamak -=10;
            x = 1;
        }
        else
        {
            x = 0;
        }

        sayi[say] = basamak;
    }
}
for(var i = 0; i < 1000; i++)
{
    toplam += sayi[i];
}

console.log(toplam);

