/*
4 + 1
3 + 2
3 + 1 + 1
2 + 2 + 1
2 + 1 + 1 + 1
1 + 1 + 1 + 1 + 1
Yukarıda 5 sayısını 5 farklı toplamayla elde edebiliyoruz. Problem bizden 100'ün
bu şekilde kaç farklı yolla toplanabileceğini soruyor.
İlk önce count isimli ana fonksiyonumuzda kullanmak üzere bir fonksiyon yazıyoruz.
Daha sonra Ana fonksiyonumuzda count fonksiyonunun yardımıyla ayrı ayrı olan her bir toplamı
alarak topluyoruz ve sonuç olarak kaç farklı yol olduğunu buluyoruz.
*/

function count(n, k, index) {
    if(n < k) {
        return 0;
    } else if ((k == 1) || (n == k)) {
        return 1;
    }

    var ubound = Math.floor(n/k);
    var say = 0;
    for(var i = index; i <= ubound; i++) {
        say += count(n-i, k-1, i);
    }

    return say;
}


function func() {
    var say = 0;
    var n = 100;

    for(var k = 2; k <= n; k++) {
        var x = count(n, k, 1);
        say += x;
    }

    document.write("count: " + (say) + "<br>");
}


func();