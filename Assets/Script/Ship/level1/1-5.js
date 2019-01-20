#pragma strict

private var HP:int = 2;
private var y:int = 0;
private var x:float = 0;

function Update () {
    if(HP <= 0){
    	Stats.money += 20;
        Destroy(gameObject);
    }
    if(y == 0 && transform.position.y <= 2.5){
    	y = 1;
    }else if(y == 1){
    	x += 0.002;
    	transform.position.y += x;
    	if(transform.position.y >= 2.7){
    		y = 2;
    	}
    }else if(y == 2){
    	transform.position.y -= 0.1;
    }
}

function OnTriggerEnter2D (col:Collider2D) {
    if(col.tag == "1"){
        HP -= col.gameObject.GetComponent(Mainbullet).dommage;
        Destroy(col.gameObject);
        
    }
}