#pragma strict

var mob:GameObject[];
var lastMob:GameObject;
var boss:GameObject;
var bossmus:AudioClip;

private var autoMoney:boolean = false;
private var isMob:boolean = true;
private var isBoss:boolean = true;

private var shake:boolean = false;
private var shakeAmount:float = 0.2;
private var audioR:boolean = false;
private var audioR2:boolean = false;
private var audioBegin:boolean = true;

function Start () {
	GetComponent.<AudioSource>().ignoreListenerVolume = true;
	AutoMoney();
}

function Update () {
	if(audioBegin){
		if(GetComponent.<AudioSource>().volume < 0.1){
			GetComponent.<AudioSource>().volume += 0.001;
		}else{
			audioBegin = false;
		}
	}
	if(shake){
    	transform.localPosition.x = Random.insideUnitSphere.x * shakeAmount;
    	transform.localPosition.y = Random.insideUnitSphere.y * shakeAmount;
    }
    
	if(autoMoney && MainShip.HP > 0){
		AutoMoney();
		autoMoney = false;
	}
	if(audioR){
		if(audioR2){
			if(GetComponent.<AudioSource>().volume < 0.2){
				Debug.Log("ok");
				GetComponent.<AudioSource>().volume += 0.001;
			}else{
				audioR = false;
			}
		}else if(GetComponent.<AudioSource>().volume > 0){
			GetComponent.<AudioSource>().volume -= 0.001;
		}else{
			GetComponent.<AudioSource>().clip = bossmus;
			GetComponent.<AudioSource>().Play();
			shake = true;
			audioR2 = true;
		}
	}
	
	if(isMob){
		for(var i=0; i < mob.length; i++){
			if(mob[i]){
				mob[i].transform.position.y -= 0.03;
			}
		}
		if(lastMob){
			isMob = false;
		}
	
	
	}else if(isBoss){
		//if(bossm){
			//Move();
			//if(boss.transform.position.y <= 5.1){
				//boss.GetComponent(ColDamage).Script();
				//boss.GetComponent(PolygonCollider2D).enabled = true;
				//bossm = false;
				//shake = false;
			//}
		//}else{
			//if(!boss){
				//bosss = false;
			//}
		//}
		
	}else{
		//Stats.SaveLevel();
		//Application.LoadLevel(1);
	}
}

function Move () {
	if(isMob){
		
	}else{
		if(boss.transform.position.y > 8.5){
			boss.transform.position.y -= 0.1;
		}else if(boss.transform.position.y > 5.1 && audioR2){
			boss.transform.position.y -= 0.01;
		}
	}
}

function AutoMoney () {
	yield WaitForSeconds(1);
	Stats.money += 1;
	Stats.SaveMoney();
	autoMoney = true;
}