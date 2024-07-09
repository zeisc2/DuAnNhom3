// function kiemtranamnhuan(nam) {
//     nam = parseInt(nam);
//     if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
//         alert(nam + " là năm nhuận.");
//     } else {
//         alert(nam + " không phải là năm nhuận.");
//     }
// }

// function tinhgiavetheodotuoi(tuoi) {
//     tuoi = parseInt(tuoi);
//     if (tuoi < 14) {
//         alert("Giá vé trẻ em: 30000 VND");
//     } else if (tuoi >= 14 && tuoi <= 60) {
//         alert("Giá vé người lớn: 50000 VND");
//     } else {
//         alert("Người già được miễn phí vé.");
//     }
// }

// function kiemtramatkhau(matkhau) {
//     if (matkhau === "admin/123456") {
//         alert("Mật khẩu hợp lệ.");
//     } else {
//         alert("Mật khẩu không hợp lệ.");
//     }
// }
// function thuchienchucnang() {
//     let chucnang = document.getElementById("chucnang").value;
//     let so = document.getElementById("so").value;

//     switch (chucnang) {
//         case "bai1":
//             kiemtranamnhuan(so);
//             break;
//         case "bai2":
//             tinhgiavetheodotuoi(so);
//             break;
//         case "bai3":
//             kiemtramatkhau(so);
//             break;
//         case "bai4":
//             break;
//         default:
//             alert("Vui lòng chọn chức năng.");
//     }
// }
// for(let i = 0; i < 100;i++) {
//     if(i %2 == 0) {
//         console.log(`i = ${i}`)
//     }
// }
// //while
// let j=0;
// while(j<100){
//     j++;
//     console.log(`j = ${j}`)
// }
// // do while
// let k = 0;
// do {
//     console.log(k);
//     k++;
// } while (k <= 100);

// // in ra các số lẻ từ 0 đén 100
// // In ra các số lẻ
// let l = 0;
// do {
//     if (l % 2 !== 0) {
//         console.log(l);
//     }
//     l++;
// } while (l <= 100);
// //in ra các giá trị lẻ chia hết cho 5
// let n = 0;
// do {
//     if (n % 2 !== 0 && n % 5 === 0) {
//         console.log(n);
//     }
//     n++;
// } while (n <= 100);
// // in ra các số chính phương 
// // let m = 0;
// // do{
// //     if(Math.sqrt(1) %i == 0) {
// //         console.log(m)
// //     }
// //     m++;
// // } while (m<=0)
// // in ra tổng các số chia hết cho 2 và 4
// let tong = 0;
// for (let d = 0; d <= 100; d += 4) {
//     tong += d;
// }
// console.log(tong);
// // in ra trung bình coocngj các số chia hết cho 2 và 4
// let dem = 0;
// let tong1 = 0;
// for (let s = 0; s <= 100; s++){
//     if (s %2 == 0 && s %4 == 0){
//         tong1 += s;
//         dem ++;
//     }
// }
// let tungbinhcong = tong1/dem;
// console.log(tungbinhcong);
// kiểm tra số đó có phải là số nguyên tố không vs số được nhập từ người dùng từ 1 đén 100
function songuyento(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
if (socankiemtra >= 1 && socankiemtra <= 100) {
    if (songuyento(socankiemtra)) {
        console.log(socankiemtra + " là số nguyên tố.");
    } else {
        console.log(socankiemtra + " không là số nguyên tố.");
    }
}
function thuchienchucnang() {
    let chucnang = document.getElementById("chucnang").value;
    let so = document.getElementById("so").value;

    switch (chucnang) {
        case "bai1":
            tinhgiaithừa(so);
            break;
        case "bai2":
            console.log(songuyento(so));
            break;
        case "bai3":
            bangcuuchuong(so);
            break;
        default:
            alert("Vui lòng chọn chức năng.");
    }
}
