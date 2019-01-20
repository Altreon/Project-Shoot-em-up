#pragma strict

var bullet:GameObject;
var fire1:Transform;
var fire2:Transform;
private var HP:int = 50;
private var dead:boolean = false;
private var fireP1:boolean = true;
private var fireP2:boolean = true;
private var fireP3:boolean = true;
private var fireP4:boolean = true;
private var fireT:int = 0;
private var dirChange:boolean = true;
private var dir:int = 0;
private var Br:int = 0;

function Start () {
	HP = 50;
	GetComponent(PolygonCollider2D).enabled = true;
	transform.FindChild("ob3").gameObject.GetComponent(PolygonCollider2D).enabled = true;
}

function Update () {
	Debug.Log(HP);
	if(HP <= 0){
    	if(!dead){
    		GetComponent(PolygonCollider2D).enabled = false;
    		Stats.money += 50;
       		Destroy(transform.FindChild("ob3").gameObject);
       		dead = true;
       	}
       	fireP1 = false;
    	fireP2 = false;
    	if(dir == 1){
    		transform.position.y += 0.1;
    		if(transform.position.y >= 8){
    			GetComponent(S1Boss4).enabled = true;
        		Destroy(this);
    		}
		}else if(dir == 2){
			transform.position.x += 0.1;
			if(transform.position.x >= 10){
				GetComponent(S1Boss4).enabled = true;
        		Destroy(this);
			}
		}else if(dir == 3){
			transform.position.y -= 0.1;
			if(transform.position.y <= -8){
				GetComponent(S1Boss4).enabled = true;
        		Destroy(this);
			}
		}
    }
	
	if(dirChange){
		DirChange();
		dirChange = false;
	}
	
	if(dir == 1 && !dead){
		fireT = 90;
		transform.position.y += 0.1;
		if(fireP1 && transform.position.y >= -3){
			Fire1();
			fireP1 = false;
		}else if(fireP2 && transform.position.y >= -1){
			Fire2();
			fireP2 = false;
		}else if(fireP3 && transform.position.y >= 1){
			Fire1();
			fireP3 = false;
		}else if(fireP4 && transform.position.y >= 3){
			Fire2();
			fireP4 = false;
		}else if(transform.position.y >= 8){
			dirChange = true;
		}
	}else if(dir == 2 && !dead){
		fireT = 0;
		transform.position.x += 0.1;
		if(fireP1 && transform.position.x >= -4.2){
			Fire1();
			fireP1 = false;
		}else if(fireP2 && transform.position.x >= -1.4){
			Fire2();
			fireP2 = false;
		}else if(fireP3 && transform.position.x >= 1.4){
			Fire1();
			fireP3 = false;
		}else if(fireP4 && transform.position.x >= 4.2){
			Fire2();
			fireP4 = false;
		}else if(transform.position.x >= 10){
			dirChange = true;
		}
	}else if(dir == 3 && !dead){
		fireT = -90;
		transform.position.y -= 0.1;
		if(fireP1 && transform.position.y <= 3){
			Fire1();
			fireP1 = false;
		}else if(fireP2 && transform.position.y <= 1){
			Fire2();
			fireP2 = false;
		}else if(fireP3 && transform.position.y <= -1){
			Fire1();
			fireP3 = false;
		}else if(fireP4 && transform.position.y <= -3){
			Fire2();
			fireP4 = false;
		}else if(transform.position.y <= -8){
			dirChange = true;
		}
	}
}

function Fire1 () {
	for(var i=90+fireT; i <= 270+fireT; i+=10){
		var Bullet = Instantiate(bullet, fire1.position, Quaternion.Euler(0,0,i));
		var BulletScript = Bullet.GetComponent(BulletDir);
		var ColScript = Bullet.GetComponent(ColDamage);
		ColScript.dommage = 2;
		BulletScript.speed = 0.1;
	}
	GetComponent.<AudioSource>().Play();
}

function Fire2 () {
	for(var i=90+fireT; i <= 270+fireT; i+=10){
		var Bullet = Instantiate(bullet, fire2.position, Quaternion.Euler(0,0,i));
		var BulletScript = Bullet.GetComponent(BulletDir);
		var ColScript = Bullet.GetComponent(ColDamage);
		ColScript.dommage = 2;
		BulletScript.speed = 0.1;
	}
	GetComponent.<AudioSource>().Play();
}

function DirChange () {
	fireP1 = true;
	fireP2 = true;
	fireP3 = true;
	fireP4 = true;
	var r:int = Random.Range(1,4);
	if(Br != r){
		if(r == 1){
			transform.rotation = Quaternion.Euler(0,0,0);
			transform.position = Vector3(-6.3,-8,0);
			dir = 1;
		}else if(r == 2){
			transform.rotation = Quaternion.Euler(0,0,-90);
			transform.position = Vector3(-8,3.9,0);
			dir = 2;
		}else if(r == 3){
			transform.rotation = Quaternion.Euler(0,0,180);
			transform.position = Vector3(6.3,8,0);
			dir = 3;
		}
	}else{
		DirChange();
	}
	Br = r;
}

function OnTriggerEnter2D (col:Collider2D) {
    if(col.tag == "1"){
        HP -= col.gameObject.GetComponent(Mainbullet).dommage;
        Destroy(col.gameObject);
        
    }
}