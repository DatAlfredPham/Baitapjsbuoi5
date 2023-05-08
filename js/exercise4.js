
function disableNumConnect() {
    var select = getELE("selectCustomer").value;
    getELE("numConnect").style.display = "company" == select ? "block" : "none";
}

function calcExercise4() {
    var select = getELE("selectCustomer").value;
    var customer = getELE("customerID").value;
    var channel = getELE("premiumChannel").value;
    var numCon = getELE("numConnect").value;
    var totalCable = 0;
     select == "company" 
        ? (totalCable = calcTotal(15,75,50,channel,numCon,5))
        : select == "people" 
            ? (totalCable = calcTotal(4.5, 20.5, 7.5,channel,0,0))

            : alert("Vui lòng chọn loại khách hàng"),


        getELE("txtNotify4").innerHTML = "Mã khách hàng: " + customer + "<br> Tiền cáp là: "+ "$" + totalCable;

}


function calcTotal(p1, p2, kcc, channel, skn, mkn) {

/*  p1 : phí xử lý hóa đơn
    p2 : phí dịch vụ cơ bản
    kcc: phí mỗi kênh cao cấp
    skn: số kết nối của khách hàng doanh nghiệp
    mkn: phí tính thêm cho mỗi kết nối kể từ kết nối thứ 11
 */

    var tong = p1 + p2 + kcc * channel;
    return skn > 10 && (tong = tong + ((skn - 10) * mkn)), tong;
}

function getELE(id) {
    return document.getElementById(id);

}

getELE("btnCalcCable").onclick = calcExercise4







