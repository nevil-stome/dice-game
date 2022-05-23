
let myScore = 10; //自分のスコア
let deadScore = 10;//敵のスコア

//加算式だったこれまでとは異なり、今回からは減算、つまりライフ
//が減っていく、という方式に変わる

//  自分がダイスを振ると敵のライフが減り、１を下回ったらクリア、
//という条件にしてある。処理の都合上、自分がダイスを振ったら
//敵のライフの残数を敵のフィールドに表示させる、という方法を取っている
function dice() {
    //1~6の出目が出るダイス
    let dice = Math.floor( Math.random() * 6) +1;
    deadScore = deadScore - dice;
	document.getElementById("mykekka").innerHTML = dice;
    document.getElementById("sainome").src= dice + ".jpg";

    document.getElementById("deadscore").innerHTML = "敵残りライフ  " + deadScore;
    //この時点で自分の残りライフが0以下、つまりfalsyになったらゲームオーバー
    if(deadScore < 1) {
        alert("ゲームクリア！")
        document.location.reload();
        } else {
        let dice = Math.floor( Math.random() * 6) +1;
        myScore = myScore - dice;
        document.getElementById("deadkekka").innerHTML = dice;
        document.getElementById("sainome").src= dice + ".jpg";
    
        document.getElementById("myscore").innerHTML = "自分残りライフ  " + myScore;
        //この時点で自分の残りライフが0以下、つまりfalsyになったらゲームオーバー
        if(myScore < 1) {
            alert("ゲームオーバー！")
            document.location.reload();
        }
    }
}