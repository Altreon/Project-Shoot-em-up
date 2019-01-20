#pragma strict

var bullet:GameObject;
var ship:GameObject;
var fire1:Transform;
private var HP:int = 2;
private var P0:int = 0;
private var P1:boolean = true;
private var P2:boolean = true;
private var P3:boolean = true;
private var target1:Vector3;
private var target2:Vector3;

function Start () {
	if(GetComponent.<AudioSource>()){
		GetComponent.<AudioSource>().volume = 0.1;
	}
}

function Update () {
    if(ship){
		target1 = ship.transform.position - fire1.transform.position;
		var angle1:float = Mathf.Atan2(target1.y, target1.x) * Mathf.Rad2Deg - 90;
		var q1:Quaternion = Quaternion.AngleAxis(angle1, Vector3.forward);
		fire1.transform.rotation = Quaternion.Slerp(fire1.transform.rotation, q1, 1);
    }
    
    if(P0 == 2){
    	transform.position.y -= 0.05;
    }
    if(P1 && transform.position.y <= 2.5){
    	P1 = false;
    	transform.Rotate(Vector3(0,0,-90));
    }else if(!P1 && P0 != 2){
    	transform.RotateAround(Vector3.zero, Vector3.forward, 2);
    	transform.position.y += 0.03;
    }
	if(P2 && transform.position.y <= 0){
		Fire();
		P2 = false;
		P0 ++;
		
	}
	if(!P2 && transform.position.y >= 0){
		Fire();
		P2 = true;
	}
	if(P3 && transform.position.x >= 0.0001){
		Fire();
		P3 = false;
	}
	if(!P3 && transform.position.x <= 0){
		Fire();
		P3 = true;
	}
    
    if(HP <= 0){
    	Stats.money += 10;
        Destroy(gameObject);
    }
}

function Fire () {
	var Bullet = Instantiate(bullet, fire1.position, fire1.rotation);
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