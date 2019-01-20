#pragma strict

static var HP:int;

var bullet:GameObject;
var fire1:Transform;

private var dommage:int;
private var speed:float;
private var fireSpeed:float;


private var fire:boolean = true;
private var q1:Quaternion;
private var q2:Quaternion;
private var q3:Quaternion;
private var dir:int;

function Start () {
	GetComponent.<AudioSource>().volume = 0.05;
	HP = Stats.HP;
	dommage = Stats.dommage;
	speed = Stats.speed;
	fireSpeed = Stats.fireSpeed;
	q1 = Quaternion.AngleAxis(90, Vector3.forward);
	q2 = Quaternion.AngleAxis(-90, Vector3.forward);
	q3 = Quaternion.AngleAxis(180, Vector3.forward);
}

function Update () {
	if(Input.GetMouseButton(0) && !Input.GetMouseButton(1)){
		transform.rotation = Quaternion.Slerp(transform.rotation, q1, 1);
		dir = 90;
	}else if(Input.GetMouseButton(1) && !Input.GetMouseButton(0)){
		transform.rotation = Quaternion.Slerp(transform.rotation, q2, 1);
		dir = -90;
	}else if(Input.GetMouseButton(0) && Input.GetMouseButton(1)){
		transform.rotation = Quaternion.Slerp(transform.rotation, q3, 1);
		dir = 180;
	}else{
		transform.rotation.z = 0;
		dir = 0;
	}

	if(MainShip.HP <= 0){
		Destroy(gameObject);
	}
	var mousex = (Input.mousePosition.x);
    var mousey = (Input.mousePosition.y);
    if(mousex > 700){
    	mousex = 700;
    }
    if(mousex < 100){
    	mousex = 100;
    }
    if(mousey > 400){
    	mousey = 400;
    }
    if(mousey < 20){
    	mousey = 20;
    }
    var mouseposition = Camera.main.ScreenToWorldPoint(new Vector2 (mousex,mousey));
    transform.position = Vector2.MoveTowards(transform.position, mouseposition, speed);
    if(fire){
    	Fire();
    	fire = false;
    }
}

function Fire () {
	GetComponent.<AudioSource>().Play();
	var Bullet = Instantiate(bullet, fire1.position, transform.rotation);
	var BulletScript = Bullet.GetComponent(Mainbullet);
	BulletScript.dommage = Stats.dommage;
	BulletScript.speed = 0.5;
	if(Stats.turret >= 2){
		var Bullet2 = Instantiate(bullet, fire1.position, Quaternion.Euler(0,0,dir + 1));
		var BulletScript2 = Bullet2.GetComponent(Mainbullet);
		BulletScript2.dommage = Stats.dommage;
		BulletScript2.speed = 0.5;
	}
	if(Stats.turret >= 3){
		var Bullet3 = Instantiate(bullet, fire1.position, Quaternion.Euler(0,0,dir - 1));
		var BulletScript3 = Bullet3.GetComponent(Mainbullet);
		BulletScript3.dommage = Stats.dommage;
		BulletScript3.speed = 0.5;
	}
	if(Stats.turret >= 4){
		var Bullet4 = Instantiate(bullet, fire1.position, Quaternion.Euler(0,0,dir + 2));
		var BulletScript4 = Bullet4.GetComponent(Mainbullet);
		BulletScript4.dommage = Stats.dommage;
		BulletScript4.speed = 0.5;
	}
	if(Stats.turret >= 5){
		var Bullet5 = Instantiate(bullet, fire1.position, Quaternion.Euler(0,0,dir - 2));
		var BulletScript5 = Bullet5.GetComponent(Mainbullet);
		BulletScript5.dommage = Stats.dommage;
		BulletScript5.speed = 0.5;
	}
	yield WaitForSeconds(fireSpeed);
	fire = true;
}

function OnTriggerEnter2D (col:Collider2D) {
    if(col.tag == "2"){
        MainShip.HP -= col.gameObject.GetComponent(ColDamage).dommage;
        Destroy(col.gameObject);
        Clignote();
    }else if(col.tag == "3"){
    	MainShip.HP -= col.gameObject.GetComponent(ColDamage).dommage;
        Clignote();
    }
}

function Clignote () {
    gameObject.GetComponent.<Collider2D>().enabled = false;
    GetComponent(SpriteRenderer).color.a = 0;
    yield WaitForSeconds(0.1);
    GetComponent(SpriteRenderer).color.a = 255;
    yield WaitForSeconds(0.1);
    GetComponent(SpriteRenderer).color.a = 0;
    yield WaitForSeconds(0.1);
    GetComponent(SpriteRenderer).color.a = 255;
    yield WaitForSeconds(0.1);
    GetComponent(SpriteRenderer).color.a = 0;
    yield WaitForSeconds(0.1);
    GetComponent(SpriteRenderer).color.a = 255;
    yield WaitForSeconds(0.1);
    GetComponent(SpriteRenderer).color.a = 0;
    yield WaitForSeconds(0.1);
    GetComponent(SpriteRenderer).color.a = 255;
    gameObject.GetComponent.<Collider2D>().enabled = true;
}