#pragma strict

var bullet:GameObject;
var ship:GameObject;
var fire:Transform;
private var HP:int = 2;
private var fire1:boolean = true;
private var fire2:boolean = true;
private var vectorToTarget:Vector3;

function Start () {
	if(GetComponent.<AudioSource>()){
		GetComponent.<AudioSource>().volume = 0.1;
	}
}

function Update () {
    if(ship){
		vectorToTarget = ship.transform.position - transform.position;
		var angle:float = Mathf.Atan2(vectorToTarget.y, vectorToTarget.x) * Mathf.Rad2Deg - 90;
		var q:Quaternion = Quaternion.AngleAxis(angle, Vector3.forward);
		transform.rotation = Quaternion.Slerp(transform.rotation, q, 1);
	}
 
	if(fire1 && transform.position.y <= 1.5){
    	Fire();
    	fire1 = false;
    }
    if(fire2 && transform.position.y <= -1.5){
    	Fire();
    	fire2 = false;
    }
    if(HP <= 0){
    	Stats.money += 10;
        Destroy(gameObject);
    }
}

function Fire () {
	var Bullet = Instantiate(bullet, fire.position, transform.rotation);
	if(GetComponent.<AudioSource>()){
		GetComponent.<AudioSource>().Play();
	}
	var BulletScript = Bullet.GetComponent(BulletDir);
	var ColScript = Bullet.GetComponent(ColDamage);
	ColScript.dommage = 2;
	BulletScript.speed = 0.1;
}

function OnTriggerEnter2D (col:Collider2D) {
    if(col.tag == "1"){
        HP -= col.gameObject.GetComponent(Mainbullet).dommage;
        Destroy(col.gameObject);
        
    }
}