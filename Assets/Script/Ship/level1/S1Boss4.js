#pragma strict
// 6.22 4.64
private var HP:int = 25;
private var dead:boolean = false;
private var dirChange:boolean = true;
private var dir:float = 0;
private var Br:int = 0;

function Start () {
	HP = 25;
	GetComponent(PolygonCollider2D).enabled = true;
}

function Update () {
	Debug.Log(HP);
	if(HP <= 0 && !dead){
       	dead = true;
       	Dead();
    }
	
	if(dirChange){
		DirChange();
		dirChange = false;
	}
	
	if(dir == 1){
		transform.position.x += 0.2;
		if(transform.position.x >= 10){
			dirChange = true;
		}
	}else if(dir == 2){
		transform.position.y -= 0.2;
		if(transform.position.y <= -8){
			dirChange = true;
		}
	}else if(dir == 3){
		transform.position.x -= 0.2;
		if(transform.position.x <= -10){
			dirChange = true;
		}
	}else if(dir == 4){
		transform.position.y += 0.2;
		if(transform.position.y >= 8){
			dirChange = true;
		}
	}
}

function DirChange () {
	dir = Random.Range(1,5);
	if(Br != dir){
		var x:float = Random.Range(-6.22,6.22);
		var y:float = Random.Range(-4.64,4.64);
		if(dir == 1){
			transform.position.x = -10;
			transform.position.y = y;
			transform.rotation = Quaternion.Euler(0,0,-90);
		}else if(dir == 2){
			transform.position.y = 8;
			transform.position.x = x;
			transform.rotation = Quaternion.Euler(0,0,180);
		}else if(dir == 3){
			transform.position.x = 10;
			transform.position.y = y;
			transform.rotation = Quaternion.Euler(0,0,90);
		}else if(dir == 4){
			transform.position.y = -8;
			transform.position.x = x;
			transform.rotation = Quaternion.Euler(0,0,0);
		}
	}
	Br = dir;
}

function Dead () {
	Stats.money += 100;
	Destroy(gameObject);
}

function OnTriggerEnter2D (col:Collider2D) {
    if(col.tag == "1"){
        HP -= col.gameObject.GetComponent(Mainbullet).dommage;
        Destroy(col.gameObject);
        
    }
}