function mainExercise1() {
    var score0 = Number(getELE("inputScore0").value);
    var area = Number(getELE("inputArea").value);
    var object = Number(getELE("inputObject").value);
    var score1 = Number(getELE("inputScore1").value);
    var score2 = Number(getELE("inputScore2").value);
    var score3 = Number(getELE("inputScore3").value);
    var dieuKien = !0;
    
    if ((dieuKien = checkScore(score1) && checkScore(score2) && checkScore(score3))) {
        var totalS = score1 + score2 + score3 + (area + object);

        getELE("txtNotify1").innerHTML = totalS >= score0 
        ? "Bạn đã đậu. Tổng điểm là: " + totalS 
        : "Bạn đã rớt. Tổng điểm là: " + totalS;

    } else getELE("txtNotify1").innerHTML = "Bạn đã rớt vì có điểm nhỏ hơn hoặc bằng 0";
}

function checkScore(n) {
    return !(n <= 0);
}

function getELE(id) {
    return document.getElementById(id);
    
}

getELE("btnResult").onclick = mainExercise1