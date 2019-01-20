#pragma strict

var bullet:GameObject;
var laser:GameObject;
var fire1:Transform[];
var fire2:Transform;
var fire3:Transform;
var laser1:GameObject[];
var audiolist:AudioSource;
private var HP:int = 100;
private var dead:boolean = false;
private var dir:int = 1;
private var fire:boolean = true;
private var fireL:boolean = true;
private var time:int = 0;
private var move:boolean = false;
private var move1:int = 0;
private var fireT:int = 0;

function Start () {
	GetComponent.<AudioSource>().volume = 0.2;
	audiolist.volume = 0.5;
	transform.FindChild("ob1").gameObject.GetComponent(PolygonCollider2D).enabled = true;
	transform.FindChild("ob2").gameObject.GetComponent(PolygonCollider2D).enabled = true;
	transform.FindChild("ob3").gameObject.GetComponent(PolygonCollider2D).enabled = true;
}

function Update () {
	if(fire && !dead){
    	Fire();
        fire = false;
    }
    if(fireL && !dead){
    	FireL();
        fireL = false;
    }
    if(move){
    	Move1();
    }

    if(HP <= 0){
    	if(!dead){
    		GetComponent(PolygonCollider2D).enabled = false;
    		transform.FindChild("ob2").gameObject.GetComponent(PolygonCollider2D).enabled = false;
    		transform.FindChild("ob3").gameObject.GetComponent(PolygonCollider2D).enabled = false;
    		Stats.money += 50;
        	Destroy(transform.FindChild("ob1").gameObject);
        	move = false;
        	dead = true;
        }
    	fire = false;
    	fireL = false;
    	if(laser1[0]){
    		for(var iD=0; iD < laser1.length; iD++){
    			Destroy(laser1[iD]);
    		}
    		audiolist.Stop();
    	}
        if(move1 == 2 || move1 == 3 || move1 == 6 || move1 == 9 || move1 == 10){
        	transform.position = Vector3(8,3.5,0);
        	transform.rotation = Quaternion.Euler(0,0,90);
        	GetComponent(S1Boss2).enabled = true;
        	Destroy(this);
        }else if(move1 == 0 || move == 11){
        	transform.position.y += 0.1;
        	if(transform.position.y >= 8){
        		move1 = 2;
        	}
        }else if(move1 == 4){
        	transform.position.x += 0.1;
        	if(transform.position.x >= 10){
        		move1 = 2;
        	}
        }else if(move1 == 7){
        	transform.position.x -= 0.1;
        	if(transform.position.x <= -10){
        		move1 = 2;
        	}
        }
    }
}

function Fire () {
	for(var i2=90+fireT; i2 <= 270; i2+=10){
		if(dir == 1){
			var Bullet2 = Instantiate(bullet, fire2.position, Quaternion.Euler(0,0,i2));
		}else if(dir == 2){
			Bullet2 = Instantiate(bullet, fire2.position, Quaternion.Euler(0,0,i2-90));
		}else if(dir == 3){
			Bullet2 = Instantiate(bullet, fire2.position, Quaternion.Euler(0,0,i2+90));
		}
		var BulletScript2 = Bullet2.GetComponent(BulletDir);
		var ColScript2 = Bullet2.GetComponent(ColDamage);
		ColScript2.dommage = 2;
		BulletScript2.speed = 0.1;
	}
	for(var i3=90+fireT; i3 <= 270; i3+=10){
		if(dir == 1){
			var Bullet3 = Instantiate(bullet, fire3.position, Quaternion.Euler(0,0,i3));
		}else if(dir == 2){
			Bullet3 = Instantiate(bullet, fire3.position, Quaternion.Euler(0,0,i3-90));
		}else if(dir == 3){
			Bullet3 = Instantiate(bullet, fire3.position, Quaternion.Euler(0,0,i3+90));
		}
		var BulletScript3 = Bullet3.GetComponent(BulletDir);
		var ColScript3 = Bullet3.GetComponent(ColDamage);
		ColScript3.dommage = 2;
		BulletScript3.speed = 0.1;
	}
	GetComponent.<AudioSource>().Play();
	if(fireT == 0){
		fireT = 2;
	}else if(fireT == 2){
		fireT = -2;
	}else if(fireT == -2){
		fireT = 4;
	}else if(fireT == 4){
		fireT = -4;
	}else{
		fireT = 0;
	}
	yield WaitForSeconds(1);
	if(time == 3){
	}else{
		fire = true;
	}
}

function FireL () {
	for(var iL=0; iL < laser1.length; iL++){
		laser1[iL] = Instantiate(laser, fire1[iL].position, fire1[iL].transform.rotation);
		laser1[iL].GetComponent(ColDamage).dommage = 4;
	}
	audiolist.Play();
	yield WaitForSeconds(0.5);
	for(var iL2=0; iL2 < laser1.length; iL2++){
		laser1[iL2].GetComponent(SpriteRenderer).color.a = 255;
		laser1[iL2].GetComponent(BoxCollider2D).enabled = true;
	}
	audiolist.volume = 1;
	yield WaitForSeconds(1);
	for(var iL3=0; iL3 < laser1.length; iL3++){
		Destroy(laser1[iL3]);
	}
	audiolist.Stop();
	audiolist.volume = 0.5;
	yield WaitForSeconds(1);
	time ++;
	if(time == 3){
		move1++;
		move = true;
	}else{
		fireL = true;
	}
}

function Move1 () {
	if(move1 == 1 && transform.position.x < 10){
		transform.position.x += 0.1;
	}else if(move1 == 1){
		move1 ++;
	}else if(move1 == 2){
		transform.Rotate(Vector3.forward * -90);
		move1 ++;
	}else if(move1 == 3 && transform.position.y > 0){
		transform.position.y -= 0.1;
	}else if(move1 == 3){
		move1 ++;
	}else if(move1 == 4 && transform.position.x > 8.2){
		transform.position.x -= 0.1;
	}else if(move1 == 4){
		dir = 2;
		move = false;
		time = 0;
		fire = true;
		fireL = true;
	}else if(move1 == 5 && transform.position.x > -10){
		transform.position.x -= 0.1;
	}else if(move1 == 5){
		move1 ++;
	}else if(move1 == 6){
		transform.Rotate(Vector3.forward * 180);
		move1 ++;
	}else if(move1 == 7 && transform.position.x < -8.2){
		transform.position.x += 0.1;
	}else if(move1 == 7){
		dir = 3;
		move = false;
		time = 0;
		fire = true;
		fireL = true;
	}else if(move1 == 8 && transform.position.y < 8){
		transform.position.y += 0.1;
	}else if(move1 == 8){
		move1 ++;
	}else if(move1 == 9){
		transform.Rotate(Vector3.forward * -90);
		move1 ++;
	}else if(move1 == 10 && transform.position.x < 0){
		transform.position.x += 0.1;
	}else if(move1 == 10){
		move1 ++;
	}else if(move1 == 11 && transform.position.y > 5.1){
		transform.position.y -= 0.1;
	}else if(move1 == 11){
		dir = 1;
		move = false;
		time = 0;
		fire = true;
		fireL = true;
		move1 = 0;
	}
}

function OnTriggerEnter2D (col:Collider2D) {
    if(col.tag == "1"){
        HP -= col.gameObject.GetComponent(Mainbullet).dommage;
        Destroy(col.gameObject);
    }
}