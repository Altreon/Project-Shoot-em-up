#pragma strict

var textObj:GameObject;
var textR:GameObject;
private var maxHP:int;

function Start () {
	maxHP = Stats.HP;
}

function Update () {
	if(MainShip.HP > 0){
		var pourcent:float = 100*MainShip.HP/maxHP;
		transform.localScale.x = 7*pourcent/100;
		textObj.GetComponent(UI.Text).text = MainShip.HP.ToString()+" PV";
	}else{
		transform.localScale.x = 0;
		textObj.GetComponent(UI.Text).text = 0+" PV";
		Dead();
	}
	textR.GetComponent(UI.Text).text = Stats.money.ToString()+" PR";
}

function Dead () {
	Camera.main.GetComponent.<AudioSource>().volume -= 0.001;
	yield WaitForSeconds(3);
	//Application.LoadLevel(1);
}