#pragma strict

var bullet:GameObject;
var dir:boolean = true;
var fire1:Transform;
var fire2:Transform;
private var fireA:Transform;
private var HP:int = 5;
private var fireP1:boolean = true;
private var fireP2:boolean = true;
private var fireP3:boolean = false;

function Start () {
	GetComponent.<AudioSource>().volume = 0.2;
	fireA = fire1;
}

function Update () {
    transform.position.y += 0.01;
    if(dir){
        transform.position.x += 0.05;
        	if(fireP1 && transform.position.x >= -1.5){
    		Fire();
    		fireP1 = false;
    	}
    	if(fireP2 && transform.position.x >= 1.5){
    		Fire();
    		fireP2 = false;
    	}
    	if(transform.position.x >= 5.2){
    		Destroy(gameObject);
    	}
    }else{
        transform.position.x -= 0.1;
        if(fireP1 && transform.position.x <= 1.5){
    		Fire();
    		fireP1 = false;
    	}
    	if(fireP2 && transform.position.x <= -1.5){
    		Fire();
    		fireP2 = false;
    	}
    	if(transform.position.x <= -5.2){
    		Destroy(gameObject);
    	}
    }
    
    if(HP <= 0){
    	Stats.money += 30;
        Destroy(gameObject);
    }
}

function Fire () {
	for(var i=90; i <= 260; i+=20){
		var Bullet:GameObject = Instantiate(bullet, fireA.position, Quaternion.Euler(0,0,i));
		var BulletScript = Bullet.GetComponent(BulletDir);
		var ColScript = Bullet.GetComponent(ColDamage);
		ColScript.dommage = 2;
		BulletScript.speed = 0.1;
	}
	GetComponent.<AudioSource>().Play();
}

function OnTriggerEnter2D (col:Collider2D) {
    if(col.tag == "1"){
        HP -= col.gameObject.GetComponent(Mainbullet).dommage;
        Destroy(col.gameObject);
        
    }
}