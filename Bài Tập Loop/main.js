/**-----Bài 1----- */

document.getElementById("btnketqua").onclick = function chanle() {
    var content = "";
    var content1 = "";
    for (var i = 0; i < 100; i += 2) {

        content += i + "-";
    }
    document.getElementById("txtthunhap").innerHTML = "Số Chẵn : " + content;
    for (var i = 1; i < 100; i += 2) {

        content1 += i + "-";
    }
    document.getElementById("txtthunhap1").innerHTML = "Số lẽ : " + content1;
}

/**-----Bài 2----- */
document.getElementById("btnketqua2").onclick = function chiachoba() {
    var count = 0;
    for (var i = 0; i < 1000; i++) {
        if (i % 3 == 0) {
            count++;
            // console.log(count);
        }
        document.getElementById("txtthunhap2").innerHTML = " Số Chia Hết Cho Ba Nhỏ Hơn 100 là :  " + count + " Số";
    }


}
/**-----Bài 3----- */
document.getElementById("btnketqua3").onclick = function songuyenduong() {
    var sum = 0;
    var i = 0;
    while (sum < 10000) {
        i++;
        sum += i;
    } document.getElementById("txtthunhap3").innerHTML = "Số Nguyên Dương Nhỏ Nhất Là : " + i;

}


/**-----Bài 4----- */
document.getElementById("btnketqua4").onclick = function SoXN() {
    var X = Number(document.getElementById("inputx").value);
    var N = Number(document.getElementById("inputn").value);
    // console.log(X,N); 
    var Total = 0;
    var T = 1;
    for (var i = 0; i < N; i++) {
        T = T * X;
        Total += T;
    } document.getElementById("txtthunhap4").innerHTML = "Tổng là : " + Total;
}

/**-----Bài 5----- */
document.getElementById("btnketqua5").onclick = function GiaithuaN() {
    var n = Number(document.getElementById("inputN1").value);
    var giaithua = 1;

    for (i = 1; i <= n; i++) {
        giaithua = giaithua * i;
    }

    document.getElementById("txtthunhap5").innerHTML = "Giai Thừa là : " + giaithua;
}
/**-----Bài 6----- */

function change_backgroud() {

    // var div = document.getElementById("div12");
    var div = document.querySelectorAll("#div12");
     content = ""
    for (var i = 0; i < div.length; i++) {
        // Vị trí chẵn => màu đỏ
        if ((i + 1) % 2 == 0) {
            div[i].style.background = "red";
            
           

            ;
        }
        else { // Vị trí lẽ => màu xanh
            div[i].style.background = "blue";
          
          

        }
       
    }
}






/**-----Bài 7----- */
// hàm kiểm tra số nguyên tố
function kiem_tra_snt(n) {

    var a = true;


    if (n < 2) {
        a = false;
    }
    else if (n == 2) {
        a = true;
    }
    else if (n % 2 == 0) {
        a = false;
    }
    else {

        for (var i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i == 0) {
                a = false;
                break;
            }
        }
    }

    return a;
}


function print_snt() {
    
    var number = document.getElementById("number").value;

    
    number = parseInt(number);

   
    var content4 = '';
    for (var i = 1; i <= number; i++) {
        // Nếu là số nguyên tố thì in ra
        if (kiem_tra_snt(i)) {
            content4 += i + ' <br/>';
        }
    }
    document.getElementById("txtt").innerHTML = content4;
}





