
let score = 0; //得点

let kettyaku = 0 //勝敗判定のための値

function dice() {
    //1~6の出目が出るダイス
    let dice = Math.floor( Math.random() * 6) +1;
    score = score + dice;
	document.getElementById("kekka").innerHTML = dice;
    document.getElementById("sainome").src= dice + ".jpg";
    
    document.getElementById("score").innerHTML = "現在のスコア  " + score;
    //この時点で10点を超えていれば勝敗が決定する
    if(score >= 10) {
        alert("ゲームクリア！")
        document.location.reload();
        }
}