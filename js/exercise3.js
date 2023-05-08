
function calcExercise3() {
    var name3 = getELE("inputName3").value;
    var numPerson = getELE("inputPerson").value;
    var numSalary = getELE("inputSalary").value - 4e6 - 16e5 * numPerson;
    var tax = 0;

    0 <= numPerson && numPerson <= 2
        ? (numPerson = getELE("inputPerson").value)
        : alert("Số người phụ thuộc không hợp lệ! Vui lòng nhập lại");
    getELE("txtNotify3").innerHTML = "";



    0 < numSalary && numSalary <= 6e7
        ? (tax = 0.05 * numSalary)

        : 6e7 < numSalary && numSalary <= 12e7
            ? (tax = 0.05 * 6e7 + 0.1 * (numSalary - 6e7))

            : 12e7 < numSalary && numSalary <= 21e7
                ? (tax = 0.05 * 6e7 + 0.1 * 6e7 + 0.15 * (numSalary - 12e7))

                : 21e7 < numSalary && numSalary <= 384e6
                    ? (tax = 0.05 * 6e7 + 0.1 * 6e7 + 0.15 * (21e7 - 12e7) + 0.2 * (numSalary - 21e7))

                    : 384e6 < numSalary && numSalary <= 624e6
                        ? (tax = 0.05 * 6e7 + 0.1 * 6e7 + 0.15 * (21e7 - 12e7) + 0.2 * (384e6 - 21e7) + 0.25 * (numSalary - 384e6))

                        : 624e6 < numSalary && numSalary <= 96e7
                            ? (tax = 0.05 * 6e7 + 0.1 * 6e7 + 0.15 * (21e7 - 12e7) + 0.2 * (384e6 - 21e7) + 0.25 * (624e6 - 384e6) + 0.3 * (numSalary - 624e6))

                            : numSalary > 96e7
                                ? (tax = 0.05 * 6e7 + 0.1 * 6e7 + 0.15 * (21e7 - 12e7) + 0.2 * (384e6 - 21e7) + 0.25 * (624e6 - 384e6) + 0.3 * (96e7 - 624e6) + 0.35 * (numSalary - 96e7))

                                : alert("Số tiền thu nhập không hợp lệ! Vui lòng nhập lại"),

        getELE("txtNotify3").innerHTML = "Họ tên: " + name3 + "<br> Tiền thuế thu nhập cá nhân: " + tax + " VND";
}



function getELE(id) {
    return document.getElementById(id);

}

getELE("btnCalcTax").onclick = calcExercise3