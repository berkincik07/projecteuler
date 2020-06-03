/*
Bu problem bizden 10’lu tabanda olan bir sayının ve 2’li tabandaki halinin
 aynı anda baştan ve sondan yazılışının aynı olduğu sayıları istiyor.(1 Milyona kadar.)
*/

function Pal_kontrol(x,y) {

    var s = x.toString(y);
    var a = s.length - 1;
    var b = 0;

    while (b < a) {

        if (s[a] !== s[b]){
            return False;
        }
        b++;
        a--;
    }
    return True
}
/* Burada yazdığımız fonksiyon sayesinde palindrom olup olmama durumunu kontrol ediyoruz.
*/

function pal1(x, Palindrom) {
    var y = x;
    x>>= Palindrom;
    while (x > 0) {
        y = (y << 1) | (x & 1);
        x >>= 1;
    }
    return y;
}
/*Burada yazdığımız fonksiyon ile de palindrom ürettik ve artık yapmamız gereken
toplama işlemine geçmek onu da basit bir fonksiyon ile yapacağız.
*/

function topla(limit) {
    var toplam = 0;

    for(var x = 0; x < 2; x++){

        var p = pal1(1,x);
        for (var i = 2; p < limit; i++ ) {
            if (Pal_kontrol(p, 10)) {
                toplam+=p
            }
            p = pal1(i,x)
        }

    }
    return toplam;
}
console.log(topla(1000000));

/*
Bu kısımda daha önce yazdığımız iki fonksiyon sayesinde toplama işlemini yapabiliyoruz.
Ve console.log şeklinde fonksiyonumuzu kullandığımızda içine verdiğimiz değere kadar
olan polindrom sayıların toplamını elde ediyoruz.
*/