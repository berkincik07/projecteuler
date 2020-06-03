/*
Bizden istenen 1’den belirli bir sayıya kadar sayıların karelerinin toplamının
ve toplamlarının karesinin hesaplanması ve farkının bulunması.Bunun için öncelikle
karelerinin toplamını ve toplamlarının karesini bulabileceğimiz  2 adet fonksiyon yazıyoruz.
Ve fonksiyonlar sayesinde bulduğumuz değerleri return fonksiyonu ile değer olarak dönüyoruz. 
*/
function kare_toplam(sayı, toplam = 0) {
    if (sayı === 0) {
        return toplam;
    }
    toplam += sayı ** 2;
    return kare_toplam(sayı - 1, toplam);
  }
  function toplam_kare(sayı, toplam = 0) {
    if(sayı === 0) {
        return toplam ** 2;
    }
    toplam += sayı;
    return toplam_kare(sayı - 1, toplam);
  }
  function toplamlar_farkı(n) {
    let karetoplamı = kare_toplam(n);
    let toplamlarınkaresi = toplam_kare(n);
    return toplamlarınkaresi - karetoplamı;
  }
console.log(fark = toplamlar_farkı(15))

/*

İlk başta yazdığımız iki fonksiyon bize karetoplamını ve toplamlarının karesini bulmamızda yardım etti.
Şimdi ki fonksiyon ise bulduğumuz değerlerin farkını almamızı sağlayacak. Bu kısımda Fonksiyonlara
döndüğümüz n değerini başka bir değişkene atıyoruz ve bu fonksiyona da bunların farkını dönüyoruz.
Daha sonra ise fark olarak yazdırdığımızda fonksiyona verdiğimiz değere göre sonucu elde ediyoruz.
Örnek olarak 15 iken  1+2+3…….+15 =  120 oluyor ve bize verdiği sonuç 120’nin karesi –  15’e kadar
olan sayıların karesi toplamı oluyor.

*/