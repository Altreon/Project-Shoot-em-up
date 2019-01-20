#pragma strict

var bullet:GameObject;
var dir:boolean = true;
var fire1:Transform;
var fire2:Transform;
private var HP:int = 3;
private var fire:boolean = true;
private var x:float = 0.1411;

function Start () {
	GetComponent.<AudioSource>().volume = 0.1;
	if(!dir){
		x = -x;
	}
}

function Update () {
	if(dir){
		x -= 0.00145;
	}else{
		x += 0.00145;
	}
	transform.position.x += x;
	if(fire){
		Fire();
		fire = false;
	}
	if(HP <= 0){
    	Stats.money += 20;
        Destroy(gameObject);
    }
}

function Fire () {
	var Bullet = Instantiate(bullet, fire1.position, Quaternion.Euler(0,0,180));
	GetComponent.<AudioSource>().Play();
	var BulletScript = Bullet.GetComponent(BulletLine);
	var ColScript = Bullet.GetComponent(ColDamage);
	ColScript.dommage = 2;
	BulletScript.speed = 0.1;
	yield WaitForSeconds(0.2);
	var Bullet2 = Instantiate(bullet, fire2.position, Quaternion.Euler(0,0,180));
	GetComponent.<AudioSource>().Play();
	var BulletScript2 = Bullet2.GetComponent(BulletLine);
	var ColScript2 = Bullet2.GetComponent(ColDamage);
	ColScript2.dommage = 2;
	BulletScript2.speed = 0.1;
	yield WaitForSeconds(0.2);
	fire = true;
}

function OnTriggerEnter2D (col:Collider2D) {
    if(col.tag == "1"){
        HP -= col.gameObject.GetComponent(Mainbullet).dommage;
        Destroy(col.gameObject);
        
    }
}