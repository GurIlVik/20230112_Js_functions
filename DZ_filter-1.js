var num = [2, 3, 5, 7, 6, 9, 12, 13];

function dz1(){
    // let result = [];
    // for (var i = 0; i < num.length; i++) {
    //     if (num[i] % 2 === 0) {
    //         result.push(num[i])
    //     }
    // }
    // document.getElementById('p1').innerHTML = result;
    num = num.filter(item => item % 2 === 0)
    document.getElementById('p1').innerHTML = num;
}

var stri = [2, 3, ' ', 5, 7, '', ' ', 6, 9, '', 12, 13];

function dz2(){
    let strin = stri
    document.getElementById('p2').innerHTML += stri;
    stri = stri.filter(item => item !== '')
    document.getElementById('p2_1').innerHTML += stri;
    strin = strin.filter(item => item !== ' ')
    document.getElementById('p2_2').innerHTML += strin;
    stri = stri.filter(item => item !== ' ')
    document.getElementById('p2_3').innerHTML += stri;
}

var bulll = [2, 3, null, 5, 7, undefined, null, 6, 9, undefined, 12, 13];

function dz3(){
    console.log(bulll)
    bulll = bulll.filter(item => item !== null)
    bulll = bulll.filter(item => item !== undefined)
    document.getElementById('p3').innerHTML += bulll;
}