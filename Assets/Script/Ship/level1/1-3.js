#pragma strict

var laser:GameObject;
var fire1:Transform;
var fire2:Transform;
var ship:GameObject;
private var HP:int = 5;
private var fireP1:boolean = true;
private var fireP2:boolean = true;
private var laser1:GameObject;
private var laser2:GameObject;
private var target1:Vector3;
private var target2:Vector3;

function Start () {
	GetComponent.<AudioSource>().volume = 0.5;
}

function Update () {
	transform.position.y += 0.01;
	if(ship){
		target1 = ship.transform.position - fire1.transform.position;
		target2 = ship.transform.position - fire2.transform.position;
		var angle1:float = Mathf.Atan2(target1.y, target1.x) * Mathf.Rad2Deg;
		var angle2:float = Mathf.Atan2(target2.y, target2.x) * Mathf.Rad2Deg;
		var q1:Quaternion = Quaternion.AngleAxis(angle1, Vector3.forward);
		var q2:Quaternion = Quaternion.AngleAxis(angle2, Vector3.forward);
		fire1.transform.rotation = Quaternion.Slerp(fire1.transform.rotation, q1, 1);
		fire2.transform.rotation = Quaternion.Slerp(fire2.transform.rotation, q2, 1);
	}
	if(laser1){
		laser1.transform.position = fire1.transform.position;
	}
	if(laser2){
		laser2.transform.position = fire2.transform.position;
	}
	
	if(fireP1 && transform.position.y <= 1.5){
		Fire();
		fireP1 = false;
	}
	if(fireP2 && transform.position.y <= -1.5){
		Fire();
		fireP2 = false;
	}
	
	if(HP <= 0){
		if(laser1){
			Destroy(laser1);
		}
		if(laser2){
			Destroy(laser2);
		}
    	Stats.money += 30;
        Destroy(gameObject);
    }
}

function Fire () {
	laser1 = Instantiate(laser, fire1.position, fire1.rotation);
	laser2 = Instantiate(laser, fire2.position, fire2.rotation);
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds(0.5);
	laser1.GetComponent(SpriteRenderer).color.a = 255;
	laser2.GetComponent(SpriteRenderer).color.a = 255;
	laser1.GetComponent(BoxCollider2D).enabled = true;
	laser2.GetComponent(BoxCollider2D).enabled = true;
	yield WaitForSeconds(1);
	Destroy(laser1);
	Destroy(laser2);
	
	//GetComponent.<AudioSource>().Play();
	//var BulletScript = Bullet.GetComponent(BulletLine);
	//var ColScript = Bullet.GetComponent(ColDamage);
	//ColScript.dommage = 2;
	//BulletScript.speed = 0.1;
}

function OnTriggerEnter2D (col:Collider2D) {
    if(col.tag == "1"){
        HP -= col.gameObject.GetComponent(Mainbullet).dommage;
        Destroy(col.gameObject);
        
    }
}