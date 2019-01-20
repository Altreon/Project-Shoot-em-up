#pragma strict

var script:MonoBehaviour;
var dommage:int;
var mob:boolean = false;
var pos:float;
private var activate:boolean = true;

function Update () {
	if(mob){
		if(transform.position.y <= pos && activate){
			script.enabled = true;
			GetComponent(PolygonCollider2D).enabled = true;
			activate = false;
		}else if(transform.position.y <= -pos){
			Destroy(gameObject);
		}
	}
}