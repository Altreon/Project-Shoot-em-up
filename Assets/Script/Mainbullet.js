#pragma strict
	
	var dommage:int;
	var speed:float;

function Start () {
	Destroy(gameObject, 5);
}

function Update () {
    transform.position += transform.up * 0.5;
}