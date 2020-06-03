/*


1/2	= 	0.5
1/3	= 	0.(3)
1/4	= 	0.25
1/5	= 	0.2
1/6	= 	0.1(6)
1/7	= 	0.(142857)
1/8	= 	0.125
1/9	= 	0.(1)
1/10	= 	0.1

Bu problemde kesir olarak bölmeler verilmiş ve 1/3 yaptığımızda 3 döngüye giriyor ve sürekli yineleniyor.
1/7'de 6 tane rakam yineleniyor ve döngü olarak yazılıyor. Bizden istenen 1000'den aşağı olmak kaydıyla
1/X olarak böldüğümüzde X yerine en çok rakamla döngüyü sürdürecek sayıyı bulmamız isteniyor.
*/

var func = function(maxNum){
    var longestNum = 1;
    var largestCycleSize = 1;
    
    for(var x = longestNum + 1; x <= maxNum; x ++){
        var cycleSize = getCycleSize(x);
        
        if(cycleSize > largestCycleSize){
            largestCycleSize = cycleSize;
            longestNum = x;
        }
    }
    
    return longestNum ;
};

var getCycleSize = function(num){
    var numaratör = 1;
    var numaratörler = [];
    var numaratörBas = [];
    
    while(!digitsInSequence){
        if(numerator == 0){
            return 0;
        }

        //Numaratör değişkeninin tekrar edilip edilmediğini kontrol ediyoruz.
        for(var i = 0; i < numaratörler.length; i++){
            if(numaratör == numaratörler[i]){
                var digitsInSequence = 0;
                
                for(var j = i; j < numaratörler.length; j++){
                    digitsInSequence += [j];
                }
                
                return digitsInSequence;
            }
        }
        
        //Burada numaratörleri ve basamakları güncelliyoruz.
        numaratörler[numaratörler.length] = numaratör;
        var basamaklar = 1;
        while(num > numaratör){
            numaratör *= 10;
            basamaklar++;
        }
        numaratörBas[numaratörBas.length] = basamaklar;
        
        //Bu kısımda bir sonraki numaratör değişkenini alıyoruz.
        numaratör = numaratör % num;
    }
};

console.log(func(1000));    
    
