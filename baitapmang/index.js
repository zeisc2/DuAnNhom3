// khai báo mảng
const sv_dtb = [5,6,7,9,4,4,2,1]
// tính độ dài của mảng 
console.log(sv_dtb.length)
// set lại index 4 ==>9
sv_dtb[4]=9;
// láy giá trị index 4
console.log(sv_dtb[4]);
//in ra các phần tử tromg mảng
for(let i=0; i<sv_dtb.length; i++){
    console.log(sv_dtb[i]);
}
sv_dtb.forEach(function(sv){
        console.log(sv);
});  

let mangsoNguyen =  [...Array(Number(100)).keys()]
console.log(mangsoNguyen);
//yêu cầu nhập vào một số nếu ko phải số yêu cầu nhập lại
//chỉ xuất ra giá trị chẵn mảng
mangsoNguyen.forEach(function(so) {
    if (so % 2 == 0) {
        console.log(so);
    }
});
//chỉ in lẻ mảng
mangsoNguyen.forEach(function(so) {
    if (so % 2 != 0) {
        console.log(so);
    }
});
//in ra các số chia hết cho 3 và 5 mảng
mangsoNguyen.forEach(function(so) {
    if (so % 3 == 0 && so % 5 == 0) {
        console.log(so);
    }
});
//tính tổng của mảng
let tong = 0;
mangsoNguyen.forEach(function(so) {
    tong += so;
});
console.log("tổng của mảng: ",tong);
//tinh trung bình cộng mảng
let  tong1 = 0;
let dem = 0;
mangsoNguyen.forEach(function(so){
    tong1 += so;
    dem ++;
});
let trungbinhcong = tong1 / dem;
console.log("trung bình cộng của màng là: ", trungbinhcong);
//in ra số chính phương mảng
function sochinhohuong(num) {
    ;
}

//in ra số nguyên tố mảngin ra số hoàn hảo mảng
//nhập vào 2 số a và b in ra giá trị trong khoảng [a,b]
//đếm số phần tử chẵn trong mảng
//đếm số phần tử lẻ trong mảng hay không
//sắp xếp tăng dần
//sắp xếp giảm dần

