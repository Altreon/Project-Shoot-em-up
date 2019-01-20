#pragma strict

var bullet:GameObject;
var fire1:Transform;
var fire2:Transform;
var fire3:Transform;
var fire4:Transform;
private var HP:int = 75;
private var dead:boolean = false;
private var fireP1:boolean = false;
private var fireP2:boolean = false;
private var fireP3:boolean = false;
private var fireP4:boolean = false;
private var fireT:int = 0;

function Start () {
	HP = 75;
	GetComponent(PolygonCollider2D).enabled = true;
	transform.FindChild("ob2").gameObject.GetComponent(PolygonCollider2D).enabled = true;
    transform.FindChild("ob3").gameObject.GetComponent(PolygonCollider2D).enabled = true;
	fireP1 = true;
	yield WaitForSeconds(0.25);
	fireP2 = true;
	yield WaitForSeconds(0.25);
	fireP3 = true;
	yield WaitForSeconds(0.25);
	fireP4 = true;
}

function Update () {
	Debug.Log(HP);
    if(transform.position.x > 0){
    	transform.position.x -= 0.1;
	}
	
	if(HP <= 0){
    	if(!dead){
    		GetComponent(PolygonCollider2D).enabled = false;
    		transform.FindChild("ob3").gameObject.GetComponent(PolygonCollider2D).enabled = false;
    		Stats.money += 50;
       		Destroy(transform.FindChild("ob2").gameObject);
       		dead = true;
       	}
       	fireP1 = false;
    	fireP2 = false;
    	fireP3 = false;
    	fireP4 = false;
    	if(transform.position.x > -10){
    		transform.position.x -= 0.1;
		}else{
			GetComponent(S1Boss3).enabled = true;
        	Destroy(this);
		}
    }
	
	if(fireP1){
		Fire1();
		fireP1 = false;
	}
	if(fireP2){
		Fire2();
		fireP2 = false;
	}
	if(fireP3){
		Fire3();
		fireP3 = false;
	}
	if(fireP4){
		Fire4();
		fireP4 = false;
	}
}

function Fire1 () {
	for(var i=90+fireT; i <= 270; i+=10){
		var Bullet = Instantiate(bullet, fire1.position, Quaternion.Euler(0,0,i));
		var BulletScript = Bullet.GetComponent(BulletDir);
		var ColScript = Bullet.GetComponent(ColDamage);
		ColScript.dommage = 2;
		BulletScript.speed = 0.1;
	}
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds(1);
	fireP1 = true;
}

function Fire2 () {
	for(var i=90+fireT; i <= 270; i+=10){
		var Bullet = Instantiate(bullet, fire2.position, Quaternion.Euler(0,0,i));
		var BulletScript = Bullet.GetComponent(BulletDir);
		var ColScript = Bullet.GetComponent(ColDamage);
		ColScript.dommage = 2;
		BulletScript.speed = 0.1;
	}
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds(1);
	fireP2 = true;
}

function Fire3 () {
	for(var i=90+fireT; i <= 270; i+=10){
		var Bullet = Instantiate(bullet, fire3.position, Quaternion.Euler(0,0,i));
		var BulletScript = Bullet.GetComponent(BulletDir);
		var ColScript = Bullet.GetComponent(ColDamage);
		ColScript.dommage = 2;
		BulletScript.speed = 0.1;
	}
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds(1);
	fireP3 = true;
}

function Fire4 () {
	for(var i=90+fireT; i <= 270; i+=10){
		var Bullet = Instantiate(bullet, fire4.position, Quaternion.Euler(0,0,i));
		var BulletScript = Bullet.GetComponent(BulletDir);
		var ColScript = Bullet.GetComponent(ColDamage);
		ColScript.dommage = 2;
		BulletScript.speed = 0.1;
	}
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds(1);
	fireP4 = true;
	if(fireT == 0){
		fireT = 5;
	}else if (fireT == 5){
		fireT = -5;
	}else{
		fireT = 0;
	}
}

function OnTriggerEnter2D (col:Collider2D) {
    if(col.tag == "1"){
        HP -= col.gameObject.GetComponent(Mainbullet).dommage;
        Destroy(col.gameObject);
        
    }
}