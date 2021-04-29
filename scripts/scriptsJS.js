var ad = "";
var soyad = "";
var hangiSoru = 1;
var dogruCevap = 0;
var cevap1 = cevap2 = cevap3 = cevap4 = cevap5 = cevap6 = cevap7 = cevap8 = cevap9 = cevap10 = false;

function formKontrol() {
    var ad = document.getElementById("ad").value;
    var soyad = document.getElementById("soyad").value;
    var hata = document.getElementById("hata")

    if (ad.length < 3 && soyad.length < 3) {
        hata.innerHTML = "AD ve SOYAD en az 3 karakterli olmalı";
    }
    else if (ad.length < 3) {
        hata.innerHTML = "AD en az 3 karakterli olmalı";
    }
    else if (soyad.length < 3) {
        hata.innerHTML = "SOYAD en az 3 karakterli olmalı";
    }

    else {
        document.getElementById("giris-sayfa").style.display = "none"
        document.getElementById("test-sayfa").style.display = "block"
    }

}

function sorulariGizle() {
    for (i = 2; i < 11; i++) {
        document.getElementById("soru" + i).style.display = "none";
        document.getElementById("geri").style.display = "none"
    }

}
function adSoyadGoster() {
    var ad = document.getElementById("ad").value;
    var soyad = document.getElementById("soyad").value;
    document.getElementById('adgoster').innerHTML = ad.toLocaleUpperCase()
    document.getElementById('soyadgoster').innerHTML = soyad.toLocaleUpperCase()
}
function bitirSoru(button1, button2, button3) {
    var cik=confirm("Bitirmek ister misiniz ?")
    if(cik==true)
    {
        for (i = 1; i < 11; i++) {
            document.getElementById("soru" + i).style.display = "none";
        }
        document.getElementById("cevap").innerHTML = "DOĞRU CEVAP SAYISI : " + dogruCevap + " /10"
        button1.style.display = "none"
        button2.style.display = "none"
        button3.style.display = "none"
    }
    else return;
}
function ileriSoru() {
    document.getElementById("soru" + hangiSoru).style.display = "none";
    hangiSoru++;
    document.getElementById("soru" + hangiSoru).style.display = "block";
    if (hangiSoru == 2) {
        document.getElementById("geri").style.display = "inline-block"
    }
    else if (hangiSoru == 10) {
        document.getElementById("ileri").style.display = "none"
    }
}
function geriSoru() {
    document.getElementById("soru" + hangiSoru).style.display = "none";
    hangiSoru--;
    document.getElementById("soru" + hangiSoru).style.display = "block";
    if (hangiSoru == 1) {
        document.getElementById('geri').style.display = "none"
    }
    else if (hangiSoru == 9) {
        document.getElementById("ileri").style.display = "inline-block"
    }
}
function griSil(hangisi)
{
    document.getElementById("secA"+hangisi).style.backgroundColor="";
    document.getElementById("secB"+hangisi).style.backgroundColor="";
    document.getElementById("secC"+hangisi).style.backgroundColor="";
    document.getElementById("secD"+hangisi).style.backgroundColor="";
    document.getElementById("secE"+hangisi).style.backgroundColor="";
}
function cevapCheck(hangisi) {
    console.log(dogruCevap)
    if (hangiSoru == 1) {
        griSil(hangiSoru);
        document.getElementById("sec"+hangisi.toLocaleUpperCase()+hangiSoru).style.backgroundColor="grey";
        if (document.getElementById(hangisi + hangiSoru).value == "d" && cevap1 == false) {
            dogruCevap++;
            cevap1 = true;
            return;
        }
        else if (document.getElementById(hangisi + hangiSoru).value !== "d" && cevap1 == true) {
            dogruCevap--;
            cevap1 = false;
            return;
        }
    }
    else if (hangiSoru == 2) {
        griSil(hangiSoru);
        console.log(hangiSoru)
        document.getElementById("sec"+hangisi.toLocaleUpperCase()+hangiSoru).style.backgroundColor="grey";
        if (document.getElementById(hangisi + hangiSoru).value == "a" && cevap2 == false) {
            dogruCevap++;
            cevap2 = true;
            return;
        }
        else if (document.getElementById(hangisi + hangiSoru).value !== "a" && cevap2 == true) {
            dogruCevap--;
            cevap2 = false;
            return;
        }
    }
    else if (hangiSoru == 3) {
        griSil(hangiSoru);
        document.getElementById("sec"+hangisi.toLocaleUpperCase()+hangiSoru).style.backgroundColor="grey";
        if (document.getElementById(hangisi + hangiSoru).value == "a" && cevap3 == false) {
            dogruCevap++;
            cevap3 = true;
            return;
        }
        else if (document.getElementById(hangisi + hangiSoru).value !== "a" && cevap3 == true) {
            dogruCevap--;
            cevap3 = false;
            return;
        }
    }
    else if (hangiSoru == 4) {
        griSil(hangiSoru);;
        document.getElementById("sec"+hangisi.toLocaleUpperCase()+hangiSoru).style.backgroundColor="grey";
        if (document.getElementById(hangisi + hangiSoru).value == "c" && cevap4 == false) {
            dogruCevap++;
            cevap4 = true;
            return;
        }
        else if (document.getElementById(hangisi + hangiSoru).value !== "c" && cevap4 == true) {
            dogruCevap--;
            cevap4 = false;
            return;
        }
    }
    else if (hangiSoru == 5) {
        griSil(hangiSoru);
        document.getElementById("sec"+hangisi.toLocaleUpperCase()+hangiSoru).style.backgroundColor="grey";
        if (document.getElementById(hangisi + hangiSoru).value == "e" && cevap5 == false) {
            dogruCevap++;
            cevap5 = true;
            return;
        }
        else if (document.getElementById(hangisi + hangiSoru).value !== "e" && cevap5 == true) {
            dogruCevap--;
            cevap5 = false;
            return;
        }
    }
    else if (hangiSoru == 6) {
        griSil(hangiSoru);
        document.getElementById("sec"+hangisi.toLocaleUpperCase()+hangiSoru).style.backgroundColor="grey";
        if (document.getElementById(hangisi + hangiSoru).value == "c" && cevap6 == false) {
            dogruCevap++;
            cevap6 = true;
            return;
        }
        else if (document.getElementById(hangisi + hangiSoru).value !== "c" && cevap6 == true) {
            dogruCevap--;
            cevap6 = false;
            return;
        }
    }
    else if (hangiSoru == 7) {
        griSil(hangiSoru);
        document.getElementById("sec"+hangisi.toLocaleUpperCase()+hangiSoru).style.backgroundColor="grey";
        if (document.getElementById(hangisi + hangiSoru).value == "b" && cevap7 == false) {
            dogruCevap++;
            cevap7 = true;
            return;
        }
        else if (document.getElementById(hangisi + hangiSoru).value !== "b" && cevap7 == true) {
            dogruCevap--;
            cevap7 = false;
            return;
        }
    }
    else if (hangiSoru == 8) {
        griSil(hangiSoru);
        document.getElementById("sec"+hangisi.toLocaleUpperCase()+hangiSoru).style.backgroundColor="grey";
        if (document.getElementById(hangisi + hangiSoru).value == "d" && cevap8 == false) {
            dogruCevap++;
            cevap8 = true;
            return;
        }
        else if (document.getElementById(hangisi + hangiSoru).value !== "d" && cevap8 == true) {
            dogruCevap--;
            cevap8 = false;
            return;
        }
    }
    else if (hangiSoru == 9) {
        griSil(hangiSoru);
        document.getElementById("sec"+hangisi.toLocaleUpperCase()+hangiSoru).style.backgroundColor="grey";
        if (document.getElementById(hangisi + hangiSoru).value == "e" && cevap9 == false) {
            dogruCevap++;
            cevap9 = true;
            return;
        }
        else if (document.getElementById(hangisi + hangiSoru).value !== "e" && cevap9 == true) {
            dogruCevap--;
            cevap9 = false;
            return;
        }
    }
    else if (hangiSoru == 10) {
        griSil(hangiSoru);
        document.getElementById("sec"+hangisi.toLocaleUpperCase()+hangiSoru).style.backgroundColor="grey";
        if (document.getElementById(hangisi + hangiSoru).value == "a" && cevap10 == false) {
            dogruCevap++;
            cevap10 = true;
            return;
        }
        else if (document.getElementById(hangisi + hangiSoru).value !== "a" && cevap10 == true) {
            dogruCevap--;
            cevap10 = false;
            return;
        }
    }
}
