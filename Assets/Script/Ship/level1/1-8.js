#pragma strict

var bullet:GameObject;
var ship:GameObject;
var dir:boolean = true;
var fire1:Transform;
private var HP:int = 3;
private var sFire:boolean = true;
private var eFire:boolean = true;
private var vectorToTarget:Vector3;

function Start () {
	GetComponent.<AudioSource>().volume = 0.2;
}

function Update () {
	if(ship){
		vectorToTarget = ship.transform.position - transform.position;
		var angle:float = Mathf.Atan2(vectorToTarget.y, vectorToTarget.x) * Mathf.Rad2Deg - 90;
		var q:Quaternion = Quaternion.AngleAxis(angle, Vector3.forward);
		transform.rotation = Quaternion.Slerp(transform.rotation, q, 1);
	}

	if(transform.position.y <= 2.71 && eFire){
		transform.position.y += 0.03;
		if(sFire){
			FireStart();
			sFire = false;
		}
	}else if(!eFire){
		transform.position.y -= 0.05;
		transform.rotation = Quaternion.Euler(0,0,180);
	}


    if(HP <= 0){
    	Stats.money += 25;
        Destroy(gameObject);
    }
}

function FireStart () {
	for(var i=0; i <= 19; i++){
		Fire();
		yield WaitForSeconds(0.05);
	}
	eFire = false;
}

function Fire () {
	var Bullet = Instantiate(bullet, fire1.position, transform.rotation);
	GetComponent.<AudioSource>().Play();
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