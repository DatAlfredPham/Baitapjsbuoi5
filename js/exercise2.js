
// Bảng giá tiền điện 

const KW_1_50 = 500;
const KW_50_100 = 650;
const KW_100_200 = 850;
const KW_200_350 = 1100;
const KW_TREN350 = 1300;

function calcExercise2() {
    var name2 = getELE("inputName").value;
    var numKw = Number(getELE("inputKw").value);
    var total = 0;

    0 < numKw && numKw <= 50
        ? (total = numKw * KW_1_50)
        : 50 < numKw && numKw <= 100
            ? (total = 50 * KW_1_50 + (numKw - 50) * KW_50_100)
            : 100 < numKw && numKw <= 200
                ? (total = 50 * KW_1_50 + 50 * KW_50_100 + (numKw - 100) * KW_100_200)
                : 200 < numKw && numKw <= 350
                    ? (total = 50 * KW_1_50 + 50 * KW_50_100 + 100 * KW_100_200 + (numKw - 200) * KW_200_350)
                    : numKw > 350
                        ? (total = 50 * KW_1_50 + 50 * KW_50_100 + 100 * KW_100_200 + 150 * KW_200_350 + (numKw - 350) * KW_TREN350)
                        : alert("Số kw không hợp lệ! Vui lòng nhập lại"),

        getELE("txtNotify2").innerHTML = "Họ tên: " + name2 + "<br> Tiền điện: " + total;
}
function getELE(id) {
    return document.getElementById(id);
    
}


getELE("btnCalcKW").onclick = calcExercise2